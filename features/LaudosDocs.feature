Feature: Laudos e Docs

	Scenario : Search Exam
	Given I am at the "Doctor" Menu and look up at the Patient "Joe"
	When I request to search document and I have a Document "Joe Blood Test" locally stored
	And i choose the Document "Joe Blood Test"
	Then the Document "Joe Blood Test" is inputed

	Scenario : Drag and Drop Exam
	Given I am at the "Doctor" Menu and look up at the Patient "Joe"
	When I drag and drop the Document "Joe Blood Test" on the field "Drag and Drop"
	Then the Document "Joe Blood Test" is inputed

	Scenario : Submit non existent document 
	Given I am at the "Archive" Menu and didn't choose any Document
	When I submit the Archive
	Then Archive is not submited 
	And Feedback Error Message is displayed

	Scenario : View Docs
	Given I am at the "Doctor" Menu and Document "Joe X-ray" stored
	When I click on the Document "Joe X-ray"
	Then the Document "Joe X-ray" is displayed

	Scenario : Refresh the Document about Patient
	Given I am at the "Doctor" Menu and submit a valiable Archive "Joe Radiography" about the Patient "Joe"
	Then the ArchiveList at the "Joe" Menu show the new submited Archive "Joe Radiography" 
	
