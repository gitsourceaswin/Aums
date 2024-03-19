function showContent(contentId) {
    // Hide all content sections
    var contentSections = document.querySelectorAll('.content');
    contentSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Set the default content to 'profile' on page load
window.onload = function() {
    showContent('profile');
    showStudentDetails();
};

// You can add more functions or logic as needed
function toggleAccordion(sectionId) {
    var section = document.getElementById(sectionId);

    if (section.style.display === 'table') {
        section.style.display = 'none';
    } else {
        section.style.display = 'table';
    }
}

// Function to show only the content of the specified tab
function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

   
        document.getElementById('default-tab').style.visibility='hidden';
    
}

 function showStudentDetails() {
        openTab('studentDetails');
    }

    // Function to validate the grievance form
function validateGrievanceForm() {
    // Get form elements
    var grievanceNumber = document.getElementById("grievanceNumber").value;
    var addressedToClassAdvisor = document.getElementById("classAdvisorCheckbox").checked;
    var addressedToPrincipal = document.getElementById("principalCheckbox").checked;
    var addressedToDean = document.getElementById("deanCheckbox").checked;
    var addressedToWarden = document.getElementById("wardenCheckbox").checked;
    var relatedTo = document.getElementById("r_to").value;
    var issue = document.getElementById("issue").value;

    // Simple validation
    if (!grievanceNumber || !issue) {
        alert("Please fill in all the required fields.");
        return false;
    }

    // Additional validation if needed

    // Display success message
    alert("Grievance submitted successfully!");
    return true;
}

// Invoke the validation function when the form is submitted
document.getElementById("grevSubSubmit").addEventListener("click", function () {
    validateGrievanceForm();
});