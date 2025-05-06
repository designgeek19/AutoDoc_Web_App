document.getElementById("doc-upload").addEventListener("change", function () {
    const actions = document.getElementById("doc-actions");
    if (this.files.length > 0) {
      actions.style.display = "block";
      logActivity(`Uploaded: ${this.files[0].name}`);
    }
  });
  
  function performAction(action) {
    const actions = {
      proofread: "Proofread document",
      translate: "Translated document",
      convert: "Converted document",
      ocr: "Performed OCR on document"
    };
  
    logActivity(actions[action]);
    alert(`Action performed: ${actions[action]}`);
  }
  
  function logActivity(message) {
    const log = document.getElementById("activity-log");
    const entry = document.createElement("li");
    entry.textContent = message;
    log.prepend(entry);
  }
  
// Avatar initials
function setAvatarInitials(name) {
    const avatar = document.querySelector('.avatar-circle');
    const initials = name.trim().split(' ').map(w => w[0].toUpperCase()).join('').slice(0, 2);
    avatar.textContent = initials;
  }
  
  // Example usage
  setAvatarInitials('Jane Doe');
  
  // Notification dropdown toggle
  document.querySelector('.notification-bell').addEventListener('click', () => {
    const dropdown = document.querySelector('.notification-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
  
  // JavaScript for handling file upload and actions
document.getElementById('file-upload').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        document.getElementById('actions').style.display = 'flex';
        document.getElementById('translate-options').style.display = 'none';
        document.getElementById('result').style.display = 'none';
        document.getElementById('account-prompt').style.display = 'none';
    }
});

function showTranslateOptions() {
    document.getElementById('translate-options').style.display = 'block';
}

function performAction(action) {
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        let resultText = "";
        switch (action) {
            case 'proofread':
                resultText = "Proofreading result: 12 errors found and corrected, here is a preview of the new document and corrections made.";
                break;
            case 'rewrite':
                resultText = "Rewritten text: This is a rewritten version of the document.";
                break;
            case 'translate':
                const language = document.getElementById('language-select').value;
                resultText = `Translated text: This is the translated version of the document in ${language}.`;
                break;
                case 'convert':
                resultText = "Converted document: The document has been converted to PDF.";
                break;
        }

        // Display the result
        document.getElementById('result-text').innerText = resultText;
        document.getElementById('result').style.display = 'block';

        // Simulate daily limit for new users
        const dailyLimitReached = false; // Replace with actual logic
        if (dailyLimitReached) {
            document.getElementById('account-prompt').style.display = 'block';
        }
    }
}

function goToContact() {
    window.location.href = "contact.html";
}