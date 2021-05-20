import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


// debounceTime sirve para reaccionar después de un tiempo de inactividad dentro del formulario
import {debounceTime} from 'rxjs/operators';


// Importo el servicio y el Modelo
import { RolesService } from '../../Servicios/roles.service';
import { Rol } from '../../Modelos/rol.modelo';

// Animación de SweetAlert2
import Swal from 'sweetalert2'


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  // Creo un modelo del Rol y lo inicializo
  DataModel_Rol : Rol = {
    Id:'',
    Estado:'',
    Descripcion:''
  };

  // Declaro una instancia para controlar todo el formulario
  formulario : FormGroup

  // Esta variable a nivel de declaración de variables de clase
  public CodeStatus;

  // Variable para recibir todo el contenido del Json
  conversion : any;

  constructor(private formBuilder:FormBuilder, private RolesService:RolesService)
  {
  // Inicialización inmediata  :: ngOnInit se usa frecuentemente para haer peticiones de datos
    this.buildForm();
  }

  private buildForm() {
    // Declaro la validacion del Formulario
    this.formulario = this.formBuilder.group
    ({
      Descripcion: ['', [Validators.required,Validators.maxLength(15)]]
    });

    // Evalua cambios cada 500 milisegundos
    this.formulario.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value => {
      console.log(value);
    });
  }

  // Limpieza de Código
  // - Recuper los campos para que no sea tan repetitiva el llamado a dichos campos cuando trabaje con los errores
  get rolField(){
    return this.formulario.get('Descripcion');
  }

  // Metodo que envia el formulario al Backend los valores directamente
  registrar_rol(event: Event)
  {
    // Cancelo el refresh nativo de html de toda la página
    event.preventDefault();


    // Pregunto si el formulario es válido
    if(this.formulario.valid){

      // Inicializo el Estado = 1 -> Activo para que cada rol que se cree inicié como Activo
      let activo = 1;


       // Obtengo todos valores que me envia los input a través del [(ngModel)] en el formulario
       // Ej: <input [(ngModel)]="DataModel_Rol.Estado" formControlName="login"> , <input [(ngModel)]="credencial.password" formControlName="password">

      // Elimino el id porque en la bd es autoincrement
      delete this.DataModel_Rol.Id;   // Este es el 1° atributo del modelo creado

      this.DataModel_Rol.Estado = activo.toString();      // Este es el 2° atributo del modelo creado
      this.DataModel_Rol.Descripcion; // Este es el 3° atributo del modelo creado


      // Envio los valores que tenga el modelo credencial creado al backend
      this.RolesService.RegistrarRol(this.DataModel_Rol).subscribe((result: any)=>
       {
         console.warn("resultado",result)

         // Obtengo el CodeStatus del objeto
         this.CodeStatus = result.CodeStatus;
         // Muestro en la consola el estado
         console.warn("Estatus",this.CodeStatus);

          if(this.CodeStatus == 707)
          {
              // Si el usuario existe entonces notifico el registro
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Rol Agregado!',
                showConfirmButton: false,
                timer: 1500
              })
          }
          else
          {
            // Animación de información ::  El usuario no existe!
            Swal.fire({
              title: '<strong>El Usuario No Existe!</strong>',
              icon: 'info',
              html:
                'Por favor, verifica tus credenciales de acceso',
              showCloseButton: false,
              showCancelButton: false,
              focusConfirm: false,
              confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Ok!',
              confirmButtonAriaLabel: 'Thumbs up, great!',

            })
          // console.warn("El codigo es diferente de 707");
          }
       })
    }
    else
    {
       // Activo todos los errores en el formulario
       this.formulario.markAllAsTouched();
    }
  }


  ngOnInit(): void {
  }

}
