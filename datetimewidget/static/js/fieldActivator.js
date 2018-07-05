$(document).ready(function() {
	$('script[widgetData]').each(function() {
		data = JSON.parse($(this).html());
		$(this).html('');
		$("#" + data.widgetID).datetimepicker({data.options}).find('input').addClass("form-control");
	});
});