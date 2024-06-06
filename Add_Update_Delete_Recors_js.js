/*STUDENT_ID(f01) //FIRST_NAME((f02)) //LAST_NAME(f03) //ADMISSION_DATE(f05) //STATUS(f07)*/

/******************** ADD_RECORD ***********************/
	// 'ADDIGROW' Plus iocn id
var numItems = 0;
function AddRecord(t_id) { //onclick="AddRecord('STUDENT')" Edit column Plus icon html
    var STUDENT_ID 		= $('#ADDIGROW').attr('id'); 
    var FIRST_NAME 		= $('#ADDIGROW').closest('tr').find('input[name="f02"]').val(); 
    var LAST_NAME 		= $('#ADDIGROW').closest('tr').find('input[name="f03"]').val();
    var ADMISSION_DATE  = $('#ADDIGROW').closest('tr').find('input[name="f05"]').val();
    var STATUS 			= $('#ADDIGROW').closest('tr').find('input[name="f07"]').val();
	
	/*Which field 'req' class have their & this filed is null then border red color*/
    $('#ADDIGROW').closest('tr').find('.req').each(function () {
        var val = $(this).val();
        if (val === '') {
            $(this).addClass('red');
            numItems++;
        } else {
            $(this).removeClass('red');
        }
    });
	
	/*Item value is null or not null check then Ajax Callback process call*/
    var numItems = $('#ADDIGROW').closest('tr').find('.red').length;
    if (numItems > 0) {
        apex.message.alert('Please fill all the required fields.');
        return false;
    } else {
        apex.server.process("ADD_DATA", { // 'ADD_DATA' Ajax Callback process name
            x02: FIRST_NAME,
            x03: LAST_NAME,
            x05: ADMISSION_DATE,
            x07: STATUS,
        }, {
            dataType: "html",
            beforeSend: function () {},
            success: function (pData) {
                apex.message.showPageSuccess('Data Inserted successfully');
                apex.region(t_id).refresh();
            }
        });
    }
}

 /*************************END_OF_ADD_RECORD*********************************/
 
   
/**************************UPDATE_RECORD************************************/ 
function UpdateRecord(main_id, cn_id, t_id) { //onclick="UpdateRecord(#STUDENT_ID#,'UPR#STUDENT_ID#','STUDENT')" Edit column green tick mark icon html
    var STUDENT_ID = main_id;
    var FIRST_NAME = $('#' + cn_id).closest('tr').find('input[name="f02"]').val(); // 'cn_id' value== UPR21 (21 is student id)
    var LAST_NAME = $('#' + cn_id).closest('tr').find('input[name="f03"]').val();
    var ADMISSION_DATE = $('#' + cn_id).closest('tr').find('input[name="f05"]').val();
    var STATUS = $('#' + cn_id).closest('tr').find('input[name="f07"]').val();
	
    apex.server.process("UPDATE_DATA", {
        x01: STUDENT_ID,
        x02: FIRST_NAME,
        x03: LAST_NAME,
        x05: ADMISSION_DATE,
        x07: STATUS,
    }, {
        dataType: "html",
        beforeSend: function () {},
        success: function (pData) {
            apex.message.showPageSuccess('Data updated successfully');
            apex.region(t_id).refresh();
        }
    });
}

/***********************END_OF_UPDATE_RECORD*********************/


/**************************DELETE_RECORD************************************/ 
function DeleteRecord(student_id,p_message,t_id) { //onclick="DeleteRecord(#STUDENT_ID#,'Are you sure?','STUDENT')"Edit column delete icon html
    var STUDENT_ID = student_id;
    apex.message.confirm( p_message, function( okPressed ) { 
        if( okPressed ) {
            apex.server.process("DELETE_RECORD", {
                x01: STUDENT_ID,
            }, {
                dataType: "html",
                beforeSend: function () {},
                success: function (pData) {
                    apex.message.showPageSuccess('Data deleted successfully');
                    apex.region(t_id).refresh();
                }
            })
        }
     })
}

/***********************END_OF_DELETE_RECORD*********************/