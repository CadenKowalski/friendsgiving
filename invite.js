function openRSVP() {
  window.open('https://docs.google.com/spreadsheets/d/1ntuN0LcX8mueLwOP737xMuStDsXQRDA_P2x5gn6rMaQ/edit?usp=sharing', '_blank');
}

function getInviteeNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  let invitee = params.get('invitee');
  
  if (invitee) {
    // Replace underscores with spaces and format the name
    invitee = invitee.replace(/_/g, ' ');
  } else {
    invitee = 'Guest';
  }
  
  return invitee;
}

function initializeInvitee() {
  const inviteeName = getInviteeNameFromURL();
  const inviteeElement = document.getElementById('inviteeName');
  inviteeElement.textContent = `Dear ${inviteeName},`;
}

// Initialize invitee name when DOM is ready
document.addEventListener('DOMContentLoaded', initializeInvitee);

function createLeaf() {
    const leaf = document.createElement('div');
    if (Math.random() > 0.5) {
      leaf.classList.add('leafRight');
    } else {
      leaf.classList.add('leafLeft');
    }
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = 5 + Math.random() * 5 + 's';
    document.body.appendChild(leaf);
    setTimeout(() => { leaf.remove(); }, 10000);
}

// Reduce leaf frequency on mobile to reduce clutter on smaller screens
const leafInterval = window.innerWidth < 768 ? 1000 : 500;
setInterval(createLeaf, leafInterval);
