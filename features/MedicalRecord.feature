Feature: medical record
    As a member of the doctor users
    I want to add, remove and edit medical records for my patients
    So that I can generate a complete medical record that helps me and other doctors towards the diagnosis of a specific patient

    Scenario: edit medical record
        Given I'm logged in as a doctor
        And I'm on the page "My Patients"
        When I select the medical record of the patient "Lucas Grisi"
        And I edit the "Weight" from "60kg" to "80kg"
        And I save the edit 
        Then the version edited is saved on the system 
        And I receive a notification that the operation was successful

    Scenario: generate growth curves
        Given I'm logged in as a doctor 
        And I'm on the page "Medical Record" of the patient "Gabriel"
        And the data of the "Age", "Weight", "Height" are filled with "15", "50kg", "160cm"
        And that's all the patients data 
        When I request to generate growth curves
        Then the OMS graphs of "weight x age", "imc x age", "stature x age" filled with "Gabriel's" data are displayed on the "Medical Record" page
        And the growth curves are saved on the system
        And I remain on the page "Medical Record" of patient "Gabriel"

    Scenario: Contest, by chat, wrong data on patient's Medical Record
        Given I'm logged in as a doctor 
        And I'm on the page "Medical Record" of the patient "Carlos"
        And I see the blood test file, on the section "Tests", attatched by "Dra Ana Maria"
        And the test is from the patient "Lucas" 
        When I request "contest by chat"
        And I select the option "Wrong/inexistent file"
        And I select "Blood test by Dra Ana Maria"
        Then I'm redirected to a chat with "Dra Ana Maria"
        And I can request the right file to her

    Scenario: Contest, by email, wrong data on patient's Medical Record 
        Given I'm logged in as a doctor 
        And I'm on the page "Medical Record" of the patient "Carlos"
        And I see the blood test file, on the section "Tests", attatched by "Dra Ana Maria"
        And the test is from the patient "Lucas" 
        When I request "contest by email"
        And I select the option "Wrong/inexistent file"
        And I select "Blood test by Dra Ana Maria"
        Then I receive a notification that an automatic email was sent to "Dra Ana Maria"
        And I remain on the page "Medical Record" of the patient "Carlos"

    Scenario: edit medical record fail
        Given I'm logged in as a doctor
        And I'm on the page "My Patients"
        When I select the medical record of the patient "Lucas Grisi"
        And I edit the "Weight" from "60kg" to "eighty kilograms"
        And I save the edit 
        Then the record is not saved on the system 
        And I receive an error notification "Wrong input on Weight field, please try again with a valid input."
        And I remain on the page "Medical Record" of the patient "Lucas Grisi" 
    
    Scenario: generate growth curves fail
        Given I'm logged in as a doctor 
        And I'm on the page "Medical Record" of the patient "Gabriel"
        And the fields of the "Age", "Weight", "Height" are filled not filled
        When I request to generate growth curves
        Then I receive a notification "more data is required to generate growth curves"
        And I remain on the page "Medical Record" of the patient "Gabriel"