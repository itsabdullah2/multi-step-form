const toggleSwitch = document.querySelector(".toggle-switch");
const monthlyPlan = document.querySelector(".monthly-plan");
const yearlyPlan = document.querySelector(".yearly-plan");
const monthlyPrice = document.querySelectorAll(".monthly-price");
const yearlyPrice = document.querySelectorAll(".yearly-price");
const freeMonths = document.querySelectorAll(".free-months");
const checkboxes = document.querySelectorAll(".checkbox");
const allRows = document.querySelectorAll(".rows .row");

if (toggleSwitch) {
  toggleSwitch.addEventListener("click", () => {
    toggleSwitch.classList.toggle("yearly");
    if (toggleSwitch.classList.contains("yearly")) {
      monthlyPlan.classList.remove("active");
      yearlyPlan.classList.add("active");
      loopOnEach(monthlyPrice, "none");
      loopOnEach(yearlyPrice, "block");
      loopOnEach(freeMonths, "block");
    } else {
      yearlyPlan.classList.remove("active");
      monthlyPlan.classList.add("active");
      loopOnEach(monthlyPrice, "block");
      loopOnEach(yearlyPrice, "none");
      loopOnEach(freeMonths, "none");
    }
  });
}

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      allRows[index].style.borderColor = "hsl(243, 100%, 62%)";
      allRows[index].style.backgroundColor = "hsl(217, 100%, 97%)";
    } else {
      allRows[index].style.borderColor = "hsl(231, 11%, 63%)";
      allRows[index].style.backgroundColor = "hsl(0, 0%, 100%)";
    }
  });
});

function loopOnEach(elements, type) {
  elements.forEach((e) => {
    e.style.display = type;
  });
}

// Working on change the steps
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const changePlanBtn = document.querySelector(".change");

const monthlyPriceOfPill = document.querySelector(".monthly-price-of-pill");
const yearlyPriceOfPill = document.querySelector(".yearly-price-of-pill");
const monthlyServicePrice = document.querySelector(".monthly-service-price");
const yearlyServicePrice = document.querySelector(".yearly-service-price");
const monthlyStoragePrice = document.querySelector(".monthly-Storage-price");
const yearlyStoragePrice = document.querySelector(".yearly-Storage-price");

nextBtn.addEventListener("click", () => nextStep());
prevBtn.addEventListener("click", () => prevStep());

if (changePlanBtn) {
  changePlanBtn.addEventListener("click", () => {
    changePlanBtn.classList.toggle("show");
    // Check if the elements exist before trying to manipulate their styles
    const monthlyPriceOfPill = document.querySelector(".monthly-price-of-pill");
    const monthlyServicePrice = document.querySelector(
      ".monthly-service-price"
    );
    const monthlyStoragePrice = document.querySelector(
      ".monthly-storage-price"
    );
    const monthlyFinalPrice = document.querySelector(".monthly-final-price");
    const yearlyPriceOfPill = document.querySelector(".yearly-price-of-pill");
    const yearlyServicePrice = document.querySelector(".yearly-service-price");
    const yearlyStoragePrice = document.querySelector(".yearly-storage-price");
    const yearlyFInalPrice = document.querySelector(".yearly-final-price");

    if (
      monthlyPriceOfPill &&
      monthlyServicePrice &&
      monthlyStoragePrice &&
      monthlyFinalPrice &&
      yearlyPriceOfPill &&
      yearlyServicePrice &&
      yearlyStoragePrice &&
      yearlyFInalPrice
    ) {
      if (changePlanBtn.classList.contains("show")) {
        monthlyPriceOfPill.style.display = "block";
        monthlyServicePrice.style.display = "block";
        monthlyStoragePrice.style.display = "block";
        monthlyFinalPrice.style.display = "block";
        yearlyPriceOfPill.style.display = "none";
        yearlyServicePrice.style.display = "none";
        yearlyStoragePrice.style.display = "none";
        yearlyFInalPrice.style.display = "none";
      } else {
        monthlyPriceOfPill.style.display = "none";
        monthlyServicePrice.style.display = "none";
        monthlyStoragePrice.style.display = "none";
        monthlyFinalPrice.style.display = "none";
        yearlyPriceOfPill.style.display = "block";
        yearlyServicePrice.style.display = "block";
        yearlyStoragePrice.style.display = "block";
        yearlyFInalPrice.style.display = "block";
      }
    } else {
      console.error("One or more elements not found!");
    }
  });
}

let currentStep = 1;

function showStep(step) {
  const trackerSections = document.querySelectorAll(".section .number");
  const stepSegments = document.querySelectorAll(".step-segment");
  const planBoxes = document.querySelectorAll(".boxes .box");

  stepSegments.forEach((step) => (step.style.display = "none"));

  const currentStepElement = document.querySelector(`[data-step="${step}"]`);
  if (currentStepElement) {
    currentStepElement.style.display = "flex";
  }

  // Add active class to current step
  trackerSections.forEach((section, index) => {
    section.classList.remove("active");

    if (index === step - 1) {
      section.classList.add("active");
    }

    if (index === stepSegments.length - 1) {
      section.classList.add("active");
    }
  });

  // select the clicked plan box
  planBoxes.forEach((box) => {
    box.onclick = () => {
      box.classList.toggle("active");
    };
  });

  if (currentStep === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "inline-block";
  }

  if (step === stepSegments.length - 1) {
    nextBtn.innerHTML = "Confirm";
  } else {
    nextBtn.innerHTML = "Next Step";
  }

  if (step === stepSegments.length) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "inline-block";
    prevBtn.style.display = "inline-block";
  }
}

function nextStep(step) {
  const stepSegments = document.querySelectorAll(".step-segment");
  currentStep++;

  if (currentStep > stepSegments.length) {
    return;
  }

  showStep(currentStep);
}

function prevStep(step) {
  currentStep--;
  showStep(currentStep);
}

// function handleChangingPlan(element) {
//   // changing the current plan

// }

document.addEventListener("DOMContentLoaded", () => {
  showStep(currentStep);
});
