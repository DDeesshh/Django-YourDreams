// регистрация - авторизация
function modalRA() {
    const authorizationModal = window.authorization;
    const registrationModal = window.registration;

    // Закрываем окно регистрации, если оно открыто
    if (registrationModal && registrationModal.open) {
        registrationModal.close();
    }

    // Открываем окно авторизации
    if (authorizationModal) {
        authorizationModal.showModal();
    }
}

// авторизация - регистрация
function modalAR() {
    const authorizationModal = window.authorization;
    const registrationModal = window.registration;

    // Закрываем окно авторизации, если оно открыто
    if (authorizationModal && authorizationModal.open) {
        authorizationModal.close();
    }

    // Открываем окно регистрации
    if (registrationModal) {
        registrationModal.showModal();
    }
}

// регистрация - поздравление
function modalRC() {
    const congratulationsModal = window.congratulations;
    const registrationModal = window.registration;

    // Закрываем окно регистрации, если оно открыто
    if (registrationModal && registrationModal.open) {
        registrationModal.close();
    }

    // Открываем окно поздравления
    if (congratulationsModal) {
        congratulationsModal.showModal();
    }
}

// поздравление - регистрация
function modalCR() {
    const congratulationsModal = window.congratulations;
    const registrationModal = window.registration;

    // Закрываем окно поздравления, если оно открыто
    if (congratulationsModal && congratulationsModal.open) {
        congratulationsModal.close();
    }

    // Открываем окно регистрации
    if (registrationModal) {
        registrationModal.showModal();
    }
}

// личный кабинет - поздравление
function modalPC() {
    const congratulationsModal = window.congratulations;
    const personalAccount = window.personalAccount;
    const authorization = window.authorization;

    // Закрываем окно личного аккаунта
    if (personalAccount && personalAccount.open) {
        personalAccount.close();
    }

    // закрываем окно поздравления
    if (congratulationsModal && congratulationsModal.open) {
        congratulationsModal.close();
    }

      // Закрываем окно авторизации
      if (authorization && authorization.open) {
        authorization.close();
    }

    // закрываем окно личного кабинета
    if (personalAccount && personalAccount.open) {
        personalAccount.close();
    }
}