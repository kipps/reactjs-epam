String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

var SimpleSchedule = {};

SimpleSchedule.addGym = function() {
	var id = parseInt(jQuery('#gyms-list').attr('data-last-id')) + 1;
	var template = jQuery('#gym-template').html().replace(/\${id}/g, id);
	jQuery('#gyms-list tbody').append(template);
	jQuery('#gyms-list').attr('data-last-id', id);
}

SimpleSchedule.removeGymFromList = function(id) {
	if (confirm("Вы действительно хотите удалить выбранный зал? Все связанное расписание будет удалено!")) {
		jQuery('tr#' + id).remove();		
	}	
}

SimpleSchedule.addLesson = function(elem, gym) {
	weekday = jQuery(elem).parent().find('select[name="weekday"]').val();
	var fromH = jQuery(elem).parent().find('select[name="from[hours]"]').val();
	var fromM = jQuery(elem).parent().find('select[name="from[minutes]"]').val();
	var toH = jQuery(elem).parent().find('select[name="to[hours]"]').val();
	var toM = jQuery(elem).parent().find('select[name="to[minutes]"]').val();	
	var container = jQuery("#ss-" + gym + "-" + weekday);
	var index = parseInt(container.attr('data-length'));
	container.attr('data-length', index + 1);
	var template = jQuery('#lessonTemplate').html()
		.replaceAll("#GYM#", gym)
		.replaceAll("#WEEKDAY#", weekday)
		.replaceAll("#INDEX#", index);
	template = jQuery(template);
	container.append(template);
	jQuery(template.find('select:eq(0)')).val(fromH);
	jQuery(template.find('select:eq(1)')).val(fromM);
	jQuery(template.find('select:eq(2)')).val(toH);
	jQuery(template.find('select:eq(3)')).val(toM);
}

SimpleSchedule.deleteLesson = function(elem) {
	jQuery(elem).parents('div.gym-schedulle-lesson').remove();
}

SimpleSchedule.validateGymsForm = function() {
	jQuery('#gyms-list tbody textarea').each(function(i,v) {
		if (jQuery(v).val().trim() === '') {
			jQuery(v).parents('tr').find('textarea, select').attr('disabled', 'disabled');
		}
	});	
}

SimpleSchedule.validateScheduleForm = function() {
	jQuery('#schedule-list select').each(function(i,v) {
		if (jQuery(v).val() == '') {
			jQuery(v).parents('td').find('select').attr('disabled', 'disabled');
		}
	});
}