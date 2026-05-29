# Portfolio Health Dashboard

Статический прототип управленческого Jira Dashboard для портфеля `PPM` в современном enterprise-стиле.

## Что создано

- `index.html` - Jira-like dashboard со всеми 10 блоками.
- `styles.css` - современная визуальная система с executive KPI, smart filters, responsive layout и dark-mode ready tokens.
- `app.js` - моковые Jira issues, фильтры, drill-down, Calculated Health и Compliance.

## Блоки дашборда

1. Filters
2. KPI / Executive Summary
3. Attention Required
4. Projects Ending < 30 Days
5. Schedule Deviations
6. Project Quality / Compliance
7. Workload by PM
8. Program View
9. Projects by Status
10. Detailed Registry

## Сохраненные JQL-фильтры

Базовые фильтры для Jira:

```jql
project = PPM AND issuetype in (Project, Program)
```

```jql
project = PPM AND issuetype = Project AND status not in ("Закрыт", "Отмена")
```

```jql
project = PPM AND issuetype = Program AND status not in ("Закрыт", "Отмена")
```

```jql
project = PPM AND issuetype = Project AND status = "Ожидает"
```

```jql
project = PPM AND issuetype = Project AND status not in ("Закрыт", "Отмена") AND "Target End" < startOfDay()
```

```jql
project = PPM AND issuetype = Project AND status not in ("Закрыт", "Отмена") AND "Target End" >= startOfDay() AND "Target End" <= endOfDay("+30d")
```

```jql
project = PPM AND issuetype = Project AND status not in ("Закрыт", "Отмена") AND ("Ссылка на карточку сервиса" is EMPTY OR "Ссылка (План проекта)" is EMPTY)
```

## Calculated Health

Health не должен быть ручным полем. В прототипе он вычисляется функцией `calculateHealth(issue)`.

Red:

- status = `Ожидает`
- `Target End` меньше текущей даты у активного проекта
- отсутствуют Assignee, Request participants, Target End
- в статусе `В процессе` отсутствуют Definition of Done, Request participants, Target End
- в статусе `Приемка` отсутствует End Date
- End Date сдвинут относительно Target End более чем на 30 дней
- Priority = Critical и отсутствуют обязательные поля

Yellow:

- завершение менее чем через 30 дней
- DSD просрочен
- слишком долго в `Новый`, `Декомпозиция и планирование`, `Приемка`
- отсутствует паспорт проекта или roadmap
- High / Critical с незаполненными управленческими полями
- есть активная связь `blocked by`

Green:

- нет Red / Yellow условий.

## Compliance

Compliance рассчитывается по статусу жизненного цикла функцией `calculateCompliance(issue)`:

- `Новый` / `Бэклог`: Summary, Description, Teams
- `Декомпозиция и планирование`: Reporter, Assignee, Agreements, Priority, DSD
- `В процессе`: Target End, Definition of Done, Assignee, Request participants
- `Приемка`: End Date
- `Закрыт`: End Date или Resolution Date

## Program automation

В блоке Program View даты программы рассчитываются по связанным Project:

- Earliest Target Start - самая ранняя `Target Start Date`
- Latest Target End - самая поздняя `Target End Date`
- связь моделируется как `Project.program = Program.key`, аналог Jira link type `is part of`

## Поддержка

Для подключения к реальной Jira нужно заменить массив `issues` в `app.js` на загрузку данных из Jira REST API или выгрузки JQL. Схема данных должна сохранить поля:

- `issueType`
- `status`
- `priority`
- `assignee`
- `requestParticipants`
- `agreements`
- `quarter`
- `targetStart`
- `startDate`
- `dsd`
- `targetEnd`
- `endDate`
- `passport`
- `roadmap`
- `definitionOfDone`
- `program`
- `links`

Текущая дата в прототипе зафиксирована как `2026-05-29`, чтобы проверки были воспроизводимыми.
