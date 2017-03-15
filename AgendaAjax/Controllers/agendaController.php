<?php

	require_once('../Models/agendaModel.php');

	$transaccion = $_POST['transaccion'];

	function ejecutaTransaccion($transaccion){

		$agenda = new Agenda();

	 	if ($transaccion=='registrar') {

	 		$agenda->registrar( $_POST['cedula_txt'], $_POST['nombre_txt'].' '.$_POST['apellido_txt'], $_POST['genero_sct'], $_POST['email_txt'], $_POST['telefono_txt'], $_POST['direccion_txt'] );

	 	}elseif ($transaccion=='tabla') {

	 		$agenda->tablaBuscar( $_POST['num'], $_POST["transaccion"], "" );
	  		
	 	}elseif ($transaccion=='buscar') {

	 		$agenda->tablaBuscar( 1, $_POST["transaccion"], $_POST['busqueda'] );
	  		
	 	}elseif ($transaccion=='ver') {

	 		$agenda->ver( $_POST['id'] );
	  		
	 	}elseif ($transaccion=='editar') {

	 		$agenda->editar( $_POST['id'] );
	  		
	 	}elseif ($transaccion=='eliminar') {

	 		$agenda->eliminar( $_POST['id'] );
	  		
	 	}

	}

  	ejecutaTransaccion($transaccion)

?>