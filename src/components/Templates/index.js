import TplAbout2 from './TplAbout2'
import TplClients from './TplClients'
import TplAdvantages from './TplAdvantages'
import TplAdvantages2 from './TplAdvantages2'
import TplAbout from './TplAbout'

const templates = {
  'tpl-about': {
    alias: 'About',
    type: 'tpl-about',
    data: {
      content: {
        title: 'Мы - Риверстарт',
        text: '<p>5 лет на рынке, 25 сотрудников в офисе в Нижнем Новгороде (головной офис) и Москве.</p>'
      }
    },
    component: TplAbout
  },
  'tpl-about-2': {
    alias: 'About 2',
    type: 'tpl-about-2',
    data: {},
    component: TplAbout2
  },
  'tpl-clients': {
    alias: 'Clients',
    type: 'tpl-clients',
    data: {},
    component: TplClients
  },
  'tpl-advantages': {
    alias: 'Advantages',
    type: 'tpl-advantages',
    data: {},
    component: TplAdvantages
  },
  'tpl-advantages-2': {
    alias: 'Advantages 2',
    type: 'tpl-advantages-2',
    data: {},
    component: TplAdvantages2
  },
  'tpl-ololol': {
    alias: '----',
    type: 'tpl-ololol',
    data: {
      content: {
        title: '<h2>Типовая процедура взаимодействия при разработке или доработке сайта</h2>',
        body: `
          <ul>
            <li>
              <p><strong>Подписываем договор</strong> с приложениями (смета и календарный план-график работ).</p>
            </li>
            <li>
              <p><strong>Оплачивается аванс</strong> первого этапа работ (оплата производится поэтапно).</p>
            </li>
            <li>
              <p><strong>Назначаем менеджера проекта,</strong> который будет решать все вопросы — от
              бухгалтерских до интеграционных и дизайнерских. Его курирует аккаунт-менеджер —
              специалист по клиентскому счастью.</p>
            </li>
            <li>
              <p><strong>Проводим этап аналитики:</strong> мы проводим интервью Клиента, создаем черновики
              идей, делаем небольшой коллаж — «настроение» проекта (moodboard).</p>
            </li>
            <li>
              <p><strong>Пишем техническое задание</strong> на сайт, рисуем прототипы сайта.</p>
            </li>
          </ul>
        `
      }
    }
  }
}

export default templates
