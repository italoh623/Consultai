Feature: Laudos e Docs

	Scenario : scan document
	Given I am “Doctor” Menu
	When I choose the scan image
	And I take a photo of the document from the cellphone
	Then the photo is scanned
	And the system applies an image filters on the photo

	Scenario : Request Exams
	Given I am at the “Doctor” Menu and have Document “Blood Test Result” stored
	When I request to send document
	And I choose the Document “Blood Test Result”
	Then The Document “Blood Test Result” is properly sent 

	Scenario: Re-edit Document
	Given I am at the “Send Document” Menu
	And choose to edit the document “Blood Test”
	Then I enter the “Write Document” Menu
	And change the document “Blood Test”
	And choose to save the document “Blood Test”
	Then the Document “Blood Test” is now properly edited

	Scenario: Send Document to non existent user
	Given I am at the “Send Document” Menu
	And write an invalid user “Jao Carlos” on the “Destination User” input
	Then Document is not sent
	And Feedback Error Message is displayed
