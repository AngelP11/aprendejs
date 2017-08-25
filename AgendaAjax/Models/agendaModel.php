<?php
	require_once('../Config/Conexion.php');

	require_once('../Config/Funciones.php');

	class Agenda{
		
		private $con;
		private $funciones;

		public function __construct(){
			$this->con = new Conexion();
			$this->funciones = new Funciones();
		}

		public function registrar( $_cedula, $_nombreCompleto, $_genero, $_telefono, $_email, $_direccion ){

			$sql = "INSERT INTO pesonas(id, cedula, nombre_completo, genero, telefono, email, direccion) VALUES (NULL,'$_cedula','$_nombreCompleto','$_genero','$_telefono','$_email','$_direccion')";

			$sql = "INSERT INTO blocks(id, block, store_shopping_id, dir_name, type, created)
			 	 	VALUES (null,".$_POST['blocks'].", ".$_POST['store_shopping_id'].", ".$_POST['dir_name'].",".$_POST['type'].", NOW())";

		}

		public function tablaBuscar(){

		}

		public function ver( $id ){

		}

		public function editar( $id ){

		}

		public function eliminar( $id ){

		}

	}


?>