$(document).ready(function() {
	$('script[widgetData]').each(function() {
		raw_data = $(this).html;
		if (raw_data.length > 0) {
			data = JSON.parse($(this).html());
			if (data.bsVersion == "3") {
				$("#" + data.widgetID).datetimepicker(data.options).find('input').addClass("form-control");
			} else {
				$("#" + data.widgetID).datetimepicker(data.options);
			}
		}
	});
});
