
$(document).ready(() => {

    $(function () {
        var ds = {
            'name': 'Visionary',
            'title': 'John Smith',
            'details': { img: "1.jpg", position: "CEO", name: "Mazen Farah", exp: 16, emp: 14, rate: '9/10' },
            'notes': ["culture", "Big Relationships"],
            'children': [
                {
                    'name': 'Integrator',
                    'title': 'Sarah Boston',
                    'notes': ["Remove obstacles", "Day to day operations"],
                    'details': { img: "2.jpg", position: "Senior Developer", name: "Hasan Rifaii", exp: 11, emp: 5, rate: '8/10' },
                    'children': [
                        {
                            'name': 'Sales/Mktg',
                            'title': 'Krista Salter',
                            'notes': ["Client Relationships", "Growth opp."],
                            'details': { img: "3.jpg", position: "Sales Manager", name: "Krista Salter", exp: 8, emp: 2, rate: '10/10' },
                            'children': [
                                {
                                    'name': 'Accounts Payable', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                                    'details': { img: "4.jpg", position: "Sales Man", name: "Michalina Soto", exp: 14, emp: 4, rate: '6/10' }
                                },
                                {
                                    'name': 'Accounts Receivable', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                                    'details': { img: "5.jpg", position: "Sales Man", name: "Cohen Kaye", exp: 3, emp: 1, rate: '5/10' }

                                },
                                {
                                    'name': 'Support', 'title': '', 'notes': ["Country Target", "Client Relationships"],
                                    'details': { img: "6.jpg", position: "Marketing", name: "Simona Collier", exp: 8, emp: 4, rate: '9/10' }

                                },
                            ]
                        },
                        {
                            'name': 'Operations/Delivery',
                            'title': 'Olaf Witt',
                            'notes': ["Programming", "Project management"],
                            'details': { img: "7.jpg", position: "Operations Manager", name: "Olaf Witt", exp: 8, emp: 2, rate: '8/10' },
                            'children': [
                                {
                                    'name': 'Project Management', 'title': '',
                                    'details': { img: "8.jpg", position: "Operations Manager", name: "Quentin Archer", exp: 8, emp: 2, rate: '5/10' },
                                },
                                { 'name': 'Programming', 'title': '' },
                            ]
                        },
                        {
                            'name': 'Finance', 'title': 'Jad Fisher', 'notes': ["Accounting/Legal", "HR/Admin/IT"],
                            'details': { img: "9.jpg", position: "Accounting/Legal", name: "David King", exp: 8, emp: 2, rate: '4/10' },

                        },

                    ]
                },
            ]
        };

        var nodeTemplate = function (data) {
            return `
                <div class="title">${data.name}</div>
                <div class="content e-title">
                <div class="" style="display:flex;">
                    <img class="img" src="app-assets/images/avatar/${data.details && data.details.img ? data.details.img : '1.jpg'}">
                    <div class="details">
                        <div class="name">${data.details && data.details.name ? data.details.name : 'Mazen'}</div>
                        <div class="position">${data.details && data.details.position ? data.details.position : 'CEO'}</div>
                        <div class="stats">
                            <div><i class="la la-certificate"></i> ${data.details && data.details.exp ? data.details.exp : 8} Y</div>
                            <div><i class="la la-university"></i> ${data.details && data.details.emp ? data.details.emp : 8} Y</div>
                            <div><i class="la la-star-half-empty"></i> ${data.details && data.details.rate ? data.details.rate : '9/10'}</div>
                        </div>
                    </div>
                </div>
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
                //     data.notes.forEach(element => {
                //         secondMenu += `<div class="note">${element}</div>`
                //     });
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