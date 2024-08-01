### 📋 Проект: Многоступенчатая форма с React и Chakra UI

#### 🛠️ Используемые технологии:
- **React**: Основной фреймворк.
- **TypeScript**: Для статической типизации.
- **React Router**: Для навигации между формами.
- **Chakra UI**: Для стилизации и UI-компонентов.
- **React Hook Form**: Для управления формами и валидации.
- **Zustand**: Для управления состоянием приложения.
- **React Input Mask**: Для маски ввода телефона.

#### 📝 Формы:

1. **Личные данные**:
    - Телефон: маска `0XXX XXX XXX`
    - Имя
    - Фамилия
    - Пол: Мужской / Женский
    - Кнопка "Далее"

2. **Адрес и место работы**:
    - Место работы: выбор из списка
    - Адрес проживания
    - Кнопки "Назад" и "Далее"

3. **Параметры займа**:
    - Ползунок для суммы займа ($200 - $1000)
    - Ползунок для срока займа (10 - 30 дней)
    - Кнопка "Подать заявку"

#### 🚀 Функциональность:
- **Сохранение данных**: Данные сохраняются в Zustand и доступны на любом шаге.
- **Отображение ошибок**: Используется `toast` для уведомлений.
- **Финальная модалка**: После отправки заявки появляется сообщение с подтверждением.

#### 📦 Установка и запуск:

1. Установите зависимости:
   ```bash
   yarn install
   ```
2. Запустите проект:
   ```bash
   yarn start
   ```

#### 💬 Контакт:
Если у вас возникли вопросы, свяжитесь с мной  через [maxim.balov19@gmail.com](mailto:maxim.balov19@gmail.com).

---

