function FngEr(t_id){
$('.addrowfa').not(':first').remove();
$('.epone:first').remove();
$('.eptwo:first').remove();

$(".editfa").click(function() {
  $(this).closest('tr').find('.epone').hide('slow');
  $(this).closest('tr').find('.eptwo').show('slow');
  $(this).closest('tr').find('.form-control').removeClass('rb');
});
$(".updatefa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
});
$(".cancelfa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
  apex.region(t_id).refresh();
});
}

$("body").on("keyup", ".req", function(event){
    $(this).closest('tr').find('.req').each(function() {
    var val=$(this).val();
  if(val===''){
      $(this).addClass('red');
  }else{
      $(this).removeClass('red');
  }
  var numItems = $(this).closest('tr').find('.red').length;
  console.log(numItems);
   if(numItems>0){
       $(this).closest('tr').find('.editableparent .eptwo .updatefa').addClass('apex_disabled');
   }else{
       $(this).closest('tr').find('.editableparent .eptwo .updatefa').removeClass('apex_disabled');
   }
});

});

$("body").on("change", ".req", function(event){
    $(this).closest('tr').find('.req').each(function() {
    var val=$(this).val();
  if(val===''){
      $(this).addClass('red');
  }else{
      $(this).removeClass('red');
  }
  var numItems = $(this).closest('tr').find('.red').length;
  console.log(numItems);
   if(numItems>0){
       $(this).closest('tr').find('.editableparent .eptwo .updatefa').addClass('apex_disabled');
   }else{
       $(this).closest('tr').find('.editableparent .eptwo .updatefa').removeClass('apex_disabled');
   }
});

});



function isNumberKey(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode != 46 && charCode > 31 
    && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function FngEr1(t_id){
$('#IOI .addrowfa1').not(':first').remove();
$('#IOI .epone:first').remove();
$('#IOI .eptwo:first').remove();

$("#IOI .editfa").click(function() {
  $(this).closest('tr').find('.epone').hide('slow');
  $(this).closest('tr').find('.eptwo').show('slow');
  $(this).closest('tr').find('.form-control').removeClass('rb');
});
$("#IOI .updatefa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
});
$("#IOI .cancelfa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
  apex.region(t_id).refresh();
});
}


function FngEr2(t_id){
$('#IOIU .addrowfa2').not(':first').remove();
$('#IOIU .epone:first').remove();
$('#IOIU .eptwo:first').remove();

$("#IOIU .editfa").click(function() {
  $(this).closest('tr').find('.epone').hide('slow');
  $(this).closest('tr').find('.eptwo').show('slow');
  $(this).closest('tr').find('.form-control').removeClass('rb');
});
$("#IOIU .updatefa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
});
$("#IOIU .cancelfa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
  apex.region(t_id).refresh();
});
}

function FngEr3(t_id){
$('.addrowfa').not(':first').remove();
$('.epone:first').remove();
$('.eptwo:first').remove();
$('.fa-info-circle:first').remove();
$('.fa-workflow:first').remove();
$(".editfa").click(function() {
  $(this).closest('tr').find('.epone').hide('slow');
  $(this).closest('tr').find('.eptwo').show('slow');
  $(this).closest('tr').find('.form-control').removeClass('rb');
});
$(".updatefa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
});
$(".cancelfa").click(function() {
  $(this).closest('tr').find('.eptwo').hide('slow');
  $(this).closest('tr').find('.epone').show('slow');
  $(this).closest('tr').find('.form-control').addClass('rb');
  apex.region(t_id).refresh();
});
}