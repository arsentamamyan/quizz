var questions = [
		{
			question:'What color of clothing are you like to wear?', 
			currentQuestion: true,
			type: 'graphics',
			options: [
				{
					category: 'tiger',
					option: 'style="background-color: #dd1e2f"'
				},
				{
					category: 'bear',
					option: 'style="background-color: #f48226"'
				},
				{
					category: 'lion',
					option: 'style="background-color: #fbf542"'
				},
				{
					category: 'hawk',
					option: 'style="background-color: #52a72b"'
				},
				{
					category: 'shark',
					option:'style="background-color: #5fc6da"'
				},
				{
					category: 'wolf',
					option: 'style="background-color: #282525"'
				}
			]
		},
		{
			question:'What landscape do you like most of all?', 
			currentQuestion: false,
			type: 'graphics',
			options: [
				{
					category: 'bear',
					option: 'style="background-image: url(images/step2/img1.jpg);"'
				},
				{
					category: 'tiger',
					option: 'style="background-image: url(images/step2/img2.jpg);"'
				},
				{
					category: 'wolf',
					option: 'style="background-image: url(images/step2/img3.jpg);"'
				},
				{
					category: 'lion',
					option: 'style="background-image: url(images/step2/img4.jpg);"'
				},
				{
					category: 'hawk',
					option: 'style="background-image: url(images/step2/img5.jpg);"'
				},
				{
					category: 'shark',
					option: 'style="background-image: url(images/step2/img6.jpg);"'
				}
			]
		},
		{
			question:'What of this, would you eat now?',
			currentQuestion: false,
			type: 'graphics',
			options: [
				{
					category: 'bear',
					option: 'style="background-image: url(images/step3/img7.jpg);"'
				},
				{
					category: 'tiger',
					option:'style="background-image: url(images/step3/img8.jpg);"'
				},
				{
					category: 'hawk',
					option: 'style="background-image: url(images/step3/img9.jpg);"'
				},
				{
					category: 'shark',
					option:'style="background-image: url(images/step3/img10.jpg);"'
				},
				{
					category: 'wolf',
					option: 'style="background-image: url(images/step3/img11.jpg);"'
				},
				{
					category: 'lion',
					option: 'style="background-image: url(images/step3/img12.jpg);"'
				}
			]
		},
		{
			question:'Which of this cats do you most look like now?',
			currentQuestion: false,
			type: 'graphics',
			options: [
				{
					category: 'bear',
					option:'style="background-image: url(images/step4/img1.jpg);"'
				},
				{
					category: 'tiger',
					option: 'style="background-image: url(images/step4/img2.jpg);"'
				},
				{
					category: 'lion',
					option: 'style="background-image: url(images/step4/img3.jpg);"'
				},
				{
					category: 'hawk',
					option: 'style="background-image: url(images/step4/img4.jpg);"'
				},
				{
					category: 'wolf',
					option: 'style="background-image: url(images/step4/img5.jpg);"'
				},
				{
					category: 'shark',
					option: 'style="background-image: url(images/step4/img6.jpg);"'
				}
			]
		},
		{
			question:'When you are scared, you are:',
			currentQuestion: false,
			type: 'text',
			options: [
				{
					category: 'tiger',
					option: 'Behave carefully'
				},
				{
					category: 'wolf',
					option: 'Run away'
				},
				{
					category: 'shark',
					option: 'Nothing special you do'
				},
				{
					category: 'hawk',
					option: 'Observe'
				},
				{
					category: 'tiger',
					option: 'Act on the principle: best defense is attack'
				},
				{
					category: 'lion',
					option: 'You are almost never scared'
				}
			]
		},
		{
			question:'Which of these sports do you like most?',
			currentQuestion: false,
			type: 'graphics',
			options: [
				{
					category: 'tiger',
					option: 'style="background-image: url(images/step6/img1.jpg);"'
				},
				{
					category: 'wolf',
					option: 'style="background-image: url(images/step6/img2.jpg);"'
				},
				{
					category: 'shark',
					option: 'style="background-image: url(images/step6/img3.jpg);"'
				},
				{
					category: 'hawk',
					option: 'style="background-image: url(images/step6/img4.jpg);"'
				},
				{
					category: 'lion',
					option: 'style="background-image: url(images/step6/img5.jpg);"'
				},
				{
					category: 'bear',
					option: 'style="background-image: url(images/step6/img6.jpg);"'
				}
			]
		}
	];

var current = 0;
var result = [];

var displayQuestion = function () {	
		var html = '';

		$('.step-from').html( current + 1 );
		if (questions[current]['currentQuestion'] === true) {
			$('.question').html('<span>' + questions[current]['question'] + '</span>');
			if (questions[current]['type'] == 'graphics') {
				$.each( questions[current]['options'], function ( index, value ) {
					html += '<div class="col-lg-4">' + 
								'<div onClick="clickOption(this)" data-id="'+ value['category'] +'" class="option text-center" ' + value['option'] + '>' + 
								'</div>' + 
							'</div>'; 
				});					
			} else {
				$.each( questions[current]['options'], function ( index, value ) {
					html += '<div class="col-lg-4">' + 
								'<div onClick="clickOption(this);" data-id="'+ value['category'] +'" class="option option-text text-center">' + 
									'<span>' + value['option'] + '</span>' + 
								'</div>' + 
							'</div>'; 
				});	
			}
			$('.options').find('.row').html(html);
		}
	};

var clickOption = function (identifier) {
	var finalAnimal = '';
	var tmpObj = [];
	if (current < 5) {
		questions[current]['currentQuestion'] = false;
		current++;
		questions[current]['currentQuestion'] = true;
		result.push($(identifier).data('id'));
		displayQuestion();
	} else {
		result.push($(identifier).data('id'));		
		for (var i = 0, j = result.length; i < j; i++) {
		   tmpObj[result[i]] = (tmpObj[result[i]] || 0) + 1;
		}
		finalAnimal = getMaxAnswered(tmpObj);
		questions[current]['currentQuestion'] = false;
		getResult(finalAnimal);
	}
	
};

var getMaxAnswered = function (obj) {
	return Object.keys(obj).reduce(function(a, b){ return obj[a] > obj[b] ? a : b });
};

var getResult = function (animal) {
	switch (animal) {
		case 'tiger':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/tiger.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
		case 'lion':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/lion.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
		case 'bear':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/bear.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
		case 'shark':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/shark.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
		case 'wolf':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/wolf.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
		case 'hawk':
		$('.panel-body').html('<div class="col-lg-12 result">' + 
									'<div class="animal-name text-center">' 
										+ animal + 
									'</div>'+
									'<div class="animal-photo text-center"><img src="./images/animals/hawk.jpg"></div>' +
									'<div class=text-center><button onClick="location.reload();" class="btn btn-primary start-over">Start Over</button></div>' +
								'</div>');
		$('.sub-heading').remove();
		break;
	}
};

$(function() {	
	displayQuestion();
	$('.step-to').html(questions.length);
});