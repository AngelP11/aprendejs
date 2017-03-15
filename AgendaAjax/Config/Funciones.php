<?php

	class Funciones{

		public function calculaEdad($fecha){
			list($Y,$m,$d) = explode("-", $fecha);
			$edad = date("md")<$m.$d ? date("Y")-$Y-1: date("Y")-$Y;
			if ($edad == "-1" ) {
				$edad == "0";
			}
			return $edad;
		}

		public function formaterFecha($fecha){
			list($Y,$m,$d) = explode("-", $fecha);
			return $d."-".$m."-".$Y;
		}

	}

?>