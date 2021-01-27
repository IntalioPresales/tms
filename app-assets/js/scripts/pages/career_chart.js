
$(document).ready(() => {

    $(function () {
        var ds = {
            'name': 'Visionary',
            'title': 'John Smith',
            'details': {
                img: "1.jpg", position: "CEO", name: "Mazen Farah", positions: 16, emp: 15, vacancy: 1,
                period: 89, period_status: "danger", opened_position: "Strategy Consultant",

            },
            'notes': ["culture", "Big Relationships"],
            'children': [
                {
                    'name': 'Accounts Payable', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                    'details': {
                        img: "4.jpg", position: "Sales Man", name: "Michalina Soto", positions: 14, emp: 13, vacancy: 1,
                        period: 35, period_status: "normal", opened_position: "Sales man"
                    }
                },
                {
                    'name': 'Accounts Receivable', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                    'details': {
                        img: "5.jpg", position: "Sales Man", name: "Cohen Kaye", positions: 3, emp: 2, vacancy: 1,
                        period: 35, period_status: "normal", opened_position: "Strategy Consultant",
                        manager_leaving: "John Doe", manager_leaving_in: 25, manager_leaving_position: "VP Accountant",
                    }
                },
                {
                    'name': 'Support', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                    'details': {
                        img: "6.jpg", position: "Marketing", name: "Simona Collier", positions: 8, emp: 7, vacancy: 1,
                        period: 67, period_status: "warning", opened_position: "Customer Support",
                        employee_leaving: "Zaid Smith", employee_leaving_in: 25, employee_leaving_position: "Secretary VP",
                    }

                },
            ]
        };

        var nodeTemplate = function (data) {

            let img = data.details && data.details.img ? data.details.img : '1.jpg'
            let name = data.details && data.details.name ? data.details.name : 'Mazen'
            let position = data.details && data.details.position ? data.details.position : 'CEO'
            let emp = data.details && data.details.emp ? data.details.emp : 6
            let positions = data.details && data.details.positions ? data.details.positions : 5
            let vacancy = data.details && data.details.vacancy ? data.details.vacancy : 1
            let period = data.details && data.details.period ? data.details.period : 1
            let period_status = data.details && data.details.period_status ? data.details.period_status : "normal"
            let opened_position = data.details && data.details.opened_position ? data.details.opened_position : "Consultant"
            let manager_leaving = data.details && data.details.manager_leaving ? data.details.manager_leaving : null
            let manager_leaving_in = data.details && data.details.manager_leaving_in ? data.details.manager_leaving_in : null
            let manager_leaving_position = data.details && data.details.manager_leaving_position ? data.details.manager_leaving_position : null

            let employee_leaving = data.details && data.details.employee_leaving ? data.details.employee_leaving : null
            let employee_leaving_in = data.details && data.details.employee_leaving_in ? data.details.employee_leaving_in : null
            let employee_leaving_position = data.details && data.details.employee_leaving_position ? data.details.employee_leaving_position : null


            return `
                <div class="custom_node">
                    <div class="title">${data.name}</div>
                    <div class="content e-title">
                    <div class="" style="display:flex;">
                        <img class="img" src="app-assets/images/avatar/${img}">
                        <div class="details">
                            <div class="name">${name}</div>
                            <div class="position">${position}</div>
                            <div class="stats">
                                <div><i class="la la-user"></i> ${emp} </div>
                                <div><i class="la la-lightbulb-o"></i> ${positions} </div>
                                <div><i class="la la-lightbulb-o text-danger"></i> <span class="text-danger">${vacancy} </span></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div class="box vacancy">
                    <i class="la la-lightbulb-o color-vacancy"></i>
                    <div class="opening_period ${period_status} flex flex-center justify-center">${period}</div>
                    <div class="text"> ${opened_position}</div>
                    <div class="text" style="margin-left: auto;" ><a href="advanced_candidates_search.html"><i class="la la-search text-danger"></i></a></div>
                </div>

                <div class="box manager_leaving" style="display:${!manager_leaving ? 'none' : 'flex'} ">
                    <i class="la la-user-secret color-vacancy" ></i>
                    <div class="text"> 
                        <div style="line-height: 9px;padding-top: 6px;">${manager_leaving}</div>
                        <small class="text-muted">${manager_leaving_position}</small>
                    </div>
                    <div class="leaving_in">${manager_leaving_in}</div>
                </div>

                <div class="box employee_leaving" style="display:${!employee_leaving ? 'none' : 'flex'} ">
                    <i class="la la-user-times color-vacancy" ></i>
                    <div class="text"> 
                        <div style="line-height: 9px;padding-top: 6px;">${employee_leaving}</div>
                        <small class="text-muted">${employee_leaving_position}</small>
                    </div>
                    <div class="leaving_in">${employee_leaving_in}</div>
                </div>

            `;
        };


        var oc = $('#chart-container').orgchart({
            'data': ds,
            'nodeTemplate': nodeTemplate,
            'nodeContent': 'title',
            'draggable': true,
            "parentNodeSymbol": false,
            'pan': true,
            'zoom': true,
            'createNode': function ($node, data) {
                // console.log($node, data)

                // if (data.notes && data.notes.length) {
                //     var secondMenu = "";
                //     secondMenu += `< div class="note" > aa</ > `

                //     // data.notes.forEach(element => {
                //     //     secondMenu += `< div class="note" > ${ element }</ > `
                //     // });
                //     $node.append(secondMenu)
                // }
            }
        });

        oc.$chart.on('nodedrop.orgchart', function (event, extraParams) {
            console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
                + ', dragZone:' + extraParams.dragZone.children('.title').text()
                + ', dropZone:' + extraParams.dropZone.children('.title').text()
            );
            if (!window.confirm('Are you sure to adjust the position of ' + extraParams.draggedNode.children('.title').text())) {
                event.preventDefault();
            }
        });


    });
})