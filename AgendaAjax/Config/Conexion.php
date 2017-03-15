<?php 
	class Conexion{
		private $datos =  array(
			"host" => 'localhost',
			"user" => 'root',
			"pass" => 'script',
			"db"   => 'agenda_ajax'
		);

		private $con;

		public function __construct(){
			$this->con = new mysqli(
				$this->datos["host"],
				$this->datos["user"],
				$this->datos["pass"],
				$this->datos["db"]
			);


			if ($this->con->connect_error) {
				$error = "<div class='error'>";
				  $error .= "Error de Conexión N°<b>".$this->con->connect_errno."<b/> Mensaje del error; <mark>".$this->con->connect_error."<mark/>";
				$error .= "<div/>";

				die($error);
			}

			$this->con->query("SET CHARACTER SET UTF8");

		}

		public function consultaSimple($sql){
			$this->con->query($sql);
		}

		public function consultaMultiple($sql){
			$datos = $this->con->multi_query($sql);
			return $datos;
		}

		public function consultaRetorno($sql){
			$datos = $this->con->query($sql);
			return $datos;
		}

		public function getIdAutoIncremet($tabla){
			$sql = "SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA='agenda_ajax' AND TABLE_NAME='$tabla'";
			$resultado = $this->con->query($sql);
			$filas = mysqli_fetch_assoc($resultado);
			return $filas["AUTO_INCREMENT"];
		}
	} 

	$connexion = new Conexion();
?>