var tasks = [
    {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2016-11-28',
        end: '2016-12-31',
        progress: 20,
        dependencies: 'Task 2, Task 3'
    },
    {
        id: 'Task 2',
        name: 'Develop a Mobile App',
        start: '2016-12-28',
        end: '2017-04-02',
        progress: 45,
        dependencies: 'Task 2, Task 3'
    },
    {
        id: 'Task 5',
        name: 'Develop Directory',
        start: '2016-10-30',
        end: '2016-11-20',
        progress: 80,
        dependencies: 'Task 2, Task 3'
    },
]

var gantt = new Gantt("#gantt", tasks, {
    header_height: 50,
    column_width: 30,
    step: 24,
    view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
    bar_height: 40,
    bar_corner_radius: 3,
    arrow_curve: 5,
    padding: 18,
    view_mode: 'Month',
    date_format: 'YYYY-MM-DD',
    custom_popup_html: function(task) {
        const end_date = task._end.format('MMM D');
        return `
          <div class="details-container">
            <h5>${task.name}</h5>
            <p>Expected to finish by ${end_date}</p>
            <p>${task.progress}% completed!</p>
          </div>
        `;
    }
});

const buttonViewModeMonth = document.querySelector('.buttonViewModeMonth');
const buttonViewModeDay = document.querySelector('.buttonViewModeDay');
const buttonViewModeWeek = document.querySelector('.buttonViewModeWeek');

buttonViewModeMonth.addEventListener('click', () => {
    gantt.change_view_mode('Month') // Quarter Day, Half Day, Day, Week, Month   
})

buttonViewModeDay.addEventListener('click', () => {
    gantt.change_view_mode('Day')
})

buttonViewModeWeek.addEventListener('click', () => {
    gantt.change_view_mode('Week')
})