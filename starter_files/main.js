// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
//( function(){
// Select the first element from the array
// let first = formData[ 0 ];
// Log the first object
// console.log( first );
// Log the string "First Name"
// console.log( first.label );
// } )();


// -------- Your Code Goes Below this Line --------

var fields = document.querySelector("#fields");

for (i = 0; i < formData.length; i++) {
/*
  var spanTag = document.createElement('span');
  spanTag.setAttribute('class', 'fa ' + formData[i].icon);
  fields.appendChild(spanTag);  */

  if (formData[i].type === 'text' || formData[i].type === 'email' || formData[i].type === 'tel') {

    var formField = document.createElement('input');
    formField.setAttribute('type', formData[i].type);
    formField.setAttribute('id', formData[i].id);
    formField.setAttribute('name', formData[i].id);
    formField.placeholder = formData[i].label;
    fields.appendChild(formField);


  } else if (formData[i].type === 'select') {

    var selectField = document.createElement('select');
    selectField.setAttribute('type', formData[i].type);
    selectField.setAttribute('id', formData[i].id);
    fields.appendChild(selectField);

    for (var p = 0; p < (formData[4].options).length; p++) {
      var optionsList = document.createElement('option');
      optionsList.textContent = (formData[4].options[p].label);
      optionsList.value = (formData[4].options[p].value);
      selectField.appendChild(optionsList);
    }
  } else if (formData[i].type === 'textarea') {

    var textField = document.createElement('textarea');
    textField.setAttribute('type', formData[i].type);
    textField.setAttribute('id', formData[i].id);
    textField.placeholder = formData[i].label;
    fields.appendChild(textField);
  };

}

console.log(fields);
