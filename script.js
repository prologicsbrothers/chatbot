// ---------- Data Structure for Nested Menus ----------

const menuData = {
    title: "Main Menu",
    questions: [
        {
            id: "deposit",
            question: "Deposit problem", emoji: "💰",
            answer: "Please  Select Your Problem!",

            subQuestions: [
                {
                    id: "payment_not_added",
                    question: "I made the payment but amount not added",
                    answer: "It usually takes 15–20 minutes for payments to reflect. If not added, please try verifying it again.",
                    subQuestions: [
                        {
                            id: "payment_15min_delay",
                            question: "Payment taking more than 15 minutes",
                            answer: "It usually takes around 15 to 20 minutes for the payment to reflect. If your payment still isn’t verified, kindly go to the 'Verify Payment' section and try again.",
                            subQuestions:[{
    id: "payment_verified_no_balance",
    question: "How to Verify again!",
    answer: "To re-verify your account, please follow the steps below:\n\n" +
            "Step 1: Click on the 'Re-verify Now' button.\n" +
            "Step 2: You will be redirected to a new verification form page.\n" +
            "Step 3: Submit your details (registered email ID + payment screenshot) on that page.",
    subQuestions: [
        {
            id: "already_reverified",
            question: "I have already re-verified",
            answer: "Have you already submitted the re-verification form?\n" +
                    "If yes, please contact us for manual review.",
            subQuestions: [
                {
                    id: "contact_support_after_reverify",
                    question: "Contact Us",
                    answer: "Before contacting us, please make sure you have the following details ready:\n\n" +
                            "Step 1: Your registered email ID.\n" +
                            "Step 2: The actual payment screenshot.\n\n" +
                            "⚠️ **Strict Warning:** If you send a fake payment screenshot or fail verification, your account will be permanently suspended.",
                }
            ]
        }
    ]
}

                            ]
                        
                        },
                        {
                            id: "payment_verified_no_balance",
                            question: "Payment verified but balance not updated",
                            answer: "Sometimes a delay may occur. If this persists, contact support with your payment screenshot and transaction ID."
                        },
                        {
                            id: "payment_verification_failed",
                            question: "Payment verification failed",
                            answer: "Ensure you have submitted the correct transaction details. If the problem persists, contact support."
                        }
                    ]
                },

                {
                    id: "verify_button_issue",
                    question: "Verify Payment button not working",
                    answer: "Make sure you have a stable internet connection and the latest app version. Try again after some time."
                },
                {
                    id: "wrong_transaction_id",
                    question: "Wrong Transaction ID entered",
                    answer: "You can re-enter the correct transaction ID in the Verify Payment section or contact support for help."
                },
                {
                    id: "qr_code_not_showing",
                    question: "QR code not showing",
                    answer: "Restart the app and check your internet. If issue persists, reinstall the app or contact support."
                },
                {
                    id: "no_screenshot",
                    question: "I don't have payment screenshot",
                    answer: "Screenshot is mandatory. If unavailable, email support@gameroz.com with transaction details for manual verification."
                }
            ]
        },
        {
            id: "withdrawal",
            question: "Withdrawal problem", emoji: "🏧",
            answer: "Please  Select Your Problem!",
            subQuestions: [
                {
                    id: "withdrawal_not_received",
                    question: "I made a withdrawal but haven’t received the amount",
                    answer: "Withdrawal verification usually takes 24 to 48 hours. Please wait patiently while your request is processed. 👇",
                    subQuestions: [
                        {
                            id: "withdrawal_delay_more_than_48",
                            question: "It has been more than 48 hours",
                            answer: "Please contact our support team and share your withdrawal details. They will help you resolve the issue promptly."
                        }
                    ]
                },                
                {
                    id: "withdraw_min_amount",
                    question: "Minimum withdrawal amount",
                    answer: "Minimum withdrawal amount is ₹50, but the option opens only after your account balance reaches ₹50."
                },
                {
                    id: "wrong_upi",
                    question: "Entered wrong UPI ID",
                    answer: "Please contact support to update your UPI ID before the payment is successful."
                }
            ]
        },
        {
            id: "battle_history",
            question: "Battle History Problems",
            answer: "Please  Select Your Problem!",

            subQuestions: [
                {
                    id: "result_pending",
                    question: "Battle result is showing as pending, waiting for opponent",
                    answer: "Please wait patiently. Your battle result will be calculated once another player joins your battle. Until then, kindly wait.",
                    subQuestions: [
                        {
                            id: "pending_more_than_2hours",
                            question: "Battle result pending for more than 2 hours",
                            answer: "If it has been more than 2 hours, please contact the support team and share your battle details with them."
                        },
                        {
                            id: "other_pending_issues",
                            question: "Other issues related to pending battle",
                            answer: "Please wait a bit longer or contact the support team if the problem persists."
                        }
                    ]
                },
                {
                    id: "incorrect_score",
                    question: "Score is showing incorrectly in battle",
                    answer: "For issues related to incorrect scores, please contact the support team for assistance."
                }
            ]
        },

        {
            id: "game_not_working",
            question: "Game Not Working Issues",
            subQuestions: [
                {
                    id: "game_not_loading",
                    question: "Game is not loading or stuck on screen",
                    answer: "Please check your internet connection and restart the app. Clear cache if necessary. If the problem continues, reinstall the app or contact support."
                },
                {
                    id: "game_crashes",
                    question: "Game crashes or closes unexpectedly",
                    answer: "Make sure your app is updated to the latest version. Close other running apps to free up memory. If crashing persists, please contact support."
                },
                {
                    id: "game_freezes",
                    question: "Game freezes during play",
                    answer: "This can happen due to device performance issues. Try closing background apps and restarting the device. If freezing continues, contact support."
                },
                {
                    id: "unable_to_start_game",
                    question: "Unable to start the game",
                    answer: "Ensure your device meets minimum requirements and has enough storage. Restart your device and try again. Contact support if the issue remains."
                }
            ]
        }
        
        
        // Add more main categories here similarly...
    ]
};

// ---------- UI Containers ----------
const chatContainer = document.getElementById("chat-container"); // For chat messages
const buttonsContainer = document.getElementById("buttons-container"); // For option buttons

// ---------- Variables to track menu path ----------
let menuStack = []; // to store history for back button navigation
let currentMenu = menuData; // start at root

// ---------- Utility to add chat message ----------
function addChatMessage(sender, text) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerText = text;
    chatContainer.appendChild(messageDiv);

    // ✅ Wait a tiny bit for DOM update, then scroll
    setTimeout(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 50); // 50ms delay helps ensure scroll triggers properly
}

// ---------- Utility to create buttons for options ----------
function displayOptions(questions) {
    buttonsContainer.innerHTML = "";

    questions.forEach((q) => {
        const btn = document.createElement("button");
        btn.innerText = q.question;
        btn.classList.add("option-button");
        btn.onclick = () => handleQuestionClick(q);
        buttonsContainer.appendChild(btn);
    });

    // Add Back button if not at root
    if (menuStack.length > 0) {
        const backBtn = document.createElement("button");
        backBtn.innerText = "⬅️ Back";
        backBtn.classList.add("back-button");
        backBtn.onclick = () => {
            currentMenu = menuStack.pop();
            displayCurrentMenu();
            addChatMessage("bot", "What else can I help you with?");
        };
        buttonsContainer.appendChild(backBtn);
    }

    // Always add Main Menu button
    const mainBtn = document.createElement("button");
    mainBtn.innerText = "🏠 Main Menu";
    mainBtn.classList.add("main-menu-button");
    mainBtn.onclick = () => {
        currentMenu = menuData;
        menuStack = [];
        displayCurrentMenu();
        addChatMessage("bot", "Back to main menu. How can I assist you?");
    };
    buttonsContainer.appendChild(mainBtn);
}

// ---------- Handle question click ----------
function handleQuestionClick(questionObj) {
    addChatMessage("user", questionObj.question);

    if (questionObj.subQuestions && questionObj.subQuestions.length > 0) {
        menuStack.push(currentMenu);
        currentMenu = {
            title: questionObj.question,
            questions: questionObj.subQuestions
        };

        setTimeout(() => {
            if (questionObj.answer) {
                addChatMessage("bot", questionObj.answer); // ✅ Show the answer immediately
            }
            displayCurrentMenu(); // ✅ Then show the sub-questions
         if (questionObj.id === "payment_verified_no_balance" && questionObj.question === "How to Verify again!") {
                addReverifyButton();
            }
        }, 600);
    }
     else if (questionObj.answer) {
        // Show final answer
        setTimeout(() => {
            addChatMessage("bot", questionObj.answer);

            // If answer mentions support, add Contact Support button
            if (/contact support|email support|reach out to support/i.test(questionObj.answer)) {
                addContactSupportButton();
            } else {
                displayOptions(currentMenu.questions);
            }
        }, 600);
    } else {
        // No subQuestions or answer
        addChatMessage("bot", "Sorry, I don't have information on that. Please try another option.");
        displayOptions(currentMenu.questions);
    }
}

function addReverifyButton() {
    // Clear existing buttons except back and main menu buttons
    buttonsContainer.innerHTML = "";

    // Create Re-verify Now button
    const reverifyBtn = document.createElement("button");
    reverifyBtn.innerText = "🔄 Re-verify Now";
    reverifyBtn.classList.add("reverify-button");
    reverifyBtn.onclick = () => {
        // Open the external URL for re-verification form
        window.open("https://gameroz.pro/re-verify", "_blank");
    };
    buttonsContainer.appendChild(reverifyBtn);

    // Add Back button if possible
    if (menuStack.length > 0) {
        const backBtn = document.createElement("button");
        backBtn.innerText = "⬅️ Back";
        backBtn.classList.add("back-button");
        backBtn.onclick = () => {
            currentMenu = menuStack.pop();
            displayCurrentMenu();
            addChatMessage("bot", "What else can I help you with?");
        };
        buttonsContainer.appendChild(backBtn);
    }

    // Add Main Menu button always
    const mainBtn = document.createElement("button");
    mainBtn.innerText = "🏠 Main Menu";
    mainBtn.classList.add("main-menu-button");
    mainBtn.onclick = () => {
        currentMenu = menuData;
        menuStack = [];
        displayCurrentMenu();
        addChatMessage("bot", "Back to main menu. How can I assist you?");
    };
    buttonsContainer.appendChild(mainBtn);
}

// ---------- Display current menu's questions ----------
function displayCurrentMenu() {
    displayOptions(currentMenu.questions);
}

// ---------- Add Contact Support Button ----------
function addContactSupportButton() {
    buttonsContainer.innerHTML = "";
    const contactBtn = document.createElement("button");
    contactBtn.innerText = "📞 Contact Support";
    contactBtn.classList.add("contact-support-button");
    contactBtn.onclick = () => {
       window.open("https://t.me/gamerozsupport", "_blank");
    };
    buttonsContainer.appendChild(contactBtn);

    // Also add back and main menu buttons
    if (menuStack.length > 0) {
        const backBtn = document.createElement("button");
        backBtn.innerText = "⬅️ Back";
        backBtn.classList.add("back-button");
        backBtn.onclick = () => {
            currentMenu = menuStack.pop();
            displayCurrentMenu();
            addChatMessage("bot", "What else can I help you with?");
        };
        buttonsContainer.appendChild(backBtn);
    }

    const mainBtn = document.createElement("button");
    mainBtn.innerText = "🏠 Main Menu";
    mainBtn.classList.add("main-menu-button");
    mainBtn.onclick = () => {
        currentMenu = menuData;
        menuStack = [];
        displayCurrentMenu();
        addChatMessage("bot", "Back to main menu. How can I assist you?");
    };
    buttonsContainer.appendChild(mainBtn);
}

// ---------- Initialize Chatbot ----------
function startChatbot() {
    addChatMessage("bot", "Hello! How can I assist you today?");
    displayCurrentMenu();
}

// ---------- Start chatbot on page load ----------
window.onload = startChatbot;
  
