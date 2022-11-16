const falso = require('@ngneat/falso');

const notificationsResponse = () => {
    const notifications = [];

    for (let i = 1; i <= 5; i++) {
        const notification = {
            id: falso.randUuid(),
            label: falso.randText(),
            type: falso.rand(['download', 'readonly']),
            url: falso.randUrl(),
            createdAt: falso.randPastDate(),
            read: falso.randBoolean()
        }

        notifications.push(notification)
    }

    return notifications;
}

module.exports = notificationsResponse