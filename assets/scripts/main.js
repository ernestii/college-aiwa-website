// I have been using jQuery a lot, so I decided
// to try the vanilla javascript for this assignment :-)

document.addEventListener('DOMContentLoaded', function() {

	// 1. Create a handler for .faq-link's click event
	var faqQuestion = document.querySelectorAll('a.faq-question');

	for (var i=0; i<faqQuestion.length; i++) {
		
		faqQuestion[i].onclick = function(e) {
			
			var faqAnswerId = this.getAttribute('href');
			var faqAnswer = document.querySelector(faqAnswerId);
			
			// 2. Add a class "highlighted" to the appropriate answer element
			faqAnswer.classList.add('highlighted');
			
			// 3. Remove highlighted class after 1500 milliseconds
			setTimeout(function() {
				faqAnswer.classList.remove('highlighted');
			}, 1500);
		}
	}
});

