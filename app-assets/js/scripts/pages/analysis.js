/* ------------------------------------------------------------------------------
 *
 *  # Echarts - pies and donuts
 *
 *  Pies and donuts chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'app-assets/js/visualization/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/pie',
            'echarts/chart/funnel',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var infographic_donut = ec.init(document.getElementById('infographic_donut'), limitless);
            // var stacked_columns = ec.init(document.getElementById('stacked_columns'), limitless);
            var surplus_stacked_columns = ec.init(document.getElementById('surplus_stacked_columns'), limitless);
            var pie_timeline = ec.init(document.getElementById('pie_timeline'), limitless);



            //
            // Pie timeline options
            //

            var idx = 1;
            pie_timeline_options = {

                // Add timeline
                timeline: {
                    x: 10,
                    x2: 10,
                    data: [
                        '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01',
                        { name: '2014-06-01', symbol: 'emptyStar2', symbolSize: 8 },
                        '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01',
                        { name: '2014-12-01', symbol: 'star2', symbolSize: 8 }
                    ],
                    label: {
                        formatter: function (s) {
                            return s.slice(0, 7);
                        }
                    },
                    autoPlay: true,
                    playInterval: 3000
                },

                // Set options
                options: [
                    {

                        // Add title
                        title: {
                            text: '',
                            subtext: '',
                            x: 'center'
                        },

                        // Add tooltip
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },

                        // Add legend
                        legend: {
                            x: 'center',
                            orient: 'horizontal',
                            data: ['.NET Core', 'Java', 'PHP', 'Javascript', 'HTML5']
                        },

                        // Display toolbox
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            feature: {
                                mark: {
                                    show: true,
                                    title: {
                                        mark: 'Markline switch',
                                        markUndo: 'Undo markline',
                                        markClear: 'Clear markline'
                                    }
                                },
                                dataView: {
                                    show: true,
                                    readOnly: false,
                                    title: 'View data',
                                    lang: ['View chart data', 'Close', 'Update']
                                },
                                magicType: {
                                    show: true,
                                    title: {
                                        pie: 'Switch to pies',
                                        funnel: 'Switch to funnel',
                                    },
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1700
                                        }
                                    }
                                },
                                restore: {
                                    show: true,
                                    title: 'Restore'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'Same as image',
                                    lang: ['Save']
                                }
                            }
                        },

                        // Add series
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            center: ['50%', '50%'],
                            radius: '60%',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },

                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'Browser',
                            type: 'pie',
                            data: [
                                { value: idx * 128 + 80, name: '.NET Core' },
                                { value: idx * 64 + 160, name: 'Java' },
                                { value: idx * 32 + 320, name: 'PHP' },
                                { value: idx * 16 + 640, name: 'Javascript' },
                                { value: idx++ * 8 + 1280, name: 'HTML5' }
                            ]
                        }]
                    }
                ]
            };



            // stacked_columns_options = {

            //     // Setup grid
            //     grid: {
            //         x: 40,
            //         x2: 47,
            //         y: 35,
            //         y2: 25
            //     },

            //     // Add tooltip
            //     tooltip: {
            //         trigger: 'axis',
            //         axisPointer: {
            //             type: 'shadow' // 'line' | 'shadow'
            //         }
            //     },

            //     // Add legend
            //     legend: {
            //         data: ['Hired', 'Left']
            //     },

            //     // Add toolbox
            //     toolbox: {
            //         show: true,
            //         orient: 'vertical',
            //         x: 'right',
            //         y: 'center',
            //         itemGap: 15,
            //         showTitle: false,
            //         feature: {
            //             mark: {
            //                 show: true,
            //                 title: {
            //                     mark: 'Markline switch',
            //                     markUndo: 'Undo markline',
            //                     markClear: 'Clear markline'
            //                 }
            //             },
            //             dataZoom: {
            //                 show: true,
            //                 title: {
            //                     dataZoom: 'Data zoom',
            //                     dataZoomReset: 'Reset zoom'
            //                 }
            //             },
            //             dataView: {
            //                 show: true,
            //                 readOnly: false,
            //                 title: 'View data',
            //                 lang: ['View chart data', 'Close', 'Update']
            //             },
            //             magicType: {
            //                 show: true,
            //                 title: {
            //                     line: 'Switch to line chart',
            //                     bar: 'Switch to bar chart',
            //                 },
            //                 type: ['line', 'bar']
            //             },
            //             restore: {
            //                 show: true,
            //                 title: 'Restore'
            //             },
            //             saveAsImage: {
            //                 show: true,
            //                 title: 'Same as image',
            //                 lang: ['Save']
            //             }
            //         }
            //     },

            //     // Enable drag recalculate
            //     calculable: true,

            //     // Horizontal axis
            //     xAxis: [{
            //         type: 'category',
            //         data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
            //     }],

            //     // Vertical axis
            //     yAxis: [{
            //         type: 'value'
            //     }],

            //     // Add series
            //     series: [
            //         {
            //             name: 'Hired',
            //             type: 'bar',
            //             data: [320, 332, 301, 334, 390, 330, 320, 334, 390,]
            //         },
            //         {
            //             name: 'Left',
            //             type: 'bar',
            //             stack: 'Advertising',
            //             data: [120, 132, 101, 134, 90, 230, 210, 134, 90,]
            //         }
            //     ]
            // };

            surplus_stacked_columns_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow' // 'line' | 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['Headcount Surplus/(Deficit)', 'Skill Surplus/(Deficit)']
                },

                // Add toolbox
                toolbox: {
                    show: false,
                    orient: 'vertical',
                    x: 'right',
                    y: 'center',
                    itemGap: 15,
                    showTitle: false,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataZoom: {
                            show: true,
                            title: {
                                dataZoom: 'Data zoom',
                                dataZoomReset: 'Reset zoom'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                            },
                            type: ['line', 'bar']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['2020']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value'
                }],

                // Add series
                series: [
                    {
                        name: 'Headcount Surplus/(Deficit)',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 320, 334, 390,]
                    },
                    {
                        name: 'Skill Surplus/(Deficit)',
                        type: 'bar',
                        stack: 'Advertising',
                        data: [120, 132, 101, 134, 90, 230, 210, 134, 90,]
                    }
                ]
            };

            //
            // Infographic donut options
            //

            // Data style
            var dataStyle = {
                normal: {
                    label: { show: false },
                    labelLine: { show: false }
                }
            };

            // Placeholder style
            var placeHolderStyle = {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    label: { show: false },
                    labelLine: { show: false }
                },
                emphasis: {
                    color: 'rgba(0,0,0,0)'
                }
            };

            // Set options
            infographic_donut_options = {

                // Add title
                title: {
                    text: '',
                    subtext: '',
                    x: 'center',
                    y: 'center',
                    itemGap: 10,
                    textStyle: {
                        color: 'rgba(30,144,255,0.8)',
                        fontSize: 19,
                        fontWeight: '500'
                    }
                },

                // Add tooltip
                tooltip: {
                    show: false,
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: document.getElementById('infographic_donut').offsetWidth / 2,
                    y: 30,
                    x: '55%',
                    itemGap: 15,
                    data: ['60% Skill Supply', '30% Skill Surplus', '10% Skill Demand'],
                    textStyle: {
                        fontSize: 15,
                        fontWeight: '400'
                    }
                },

                // Add series
                series: [
                    {
                        name: '1',
                        type: 'pie',
                        clockWise: false,
                        radius: ['75%', '90%'],
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 60,
                                name: '60% Skill Supply'
                            },
                            {
                                value: 40,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: '2',
                        type: 'pie',
                        clockWise: false,
                        radius: ['60%', '75%'],
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 30,
                                name: '30% Skill Surplus'
                            },
                            {
                                value: 70,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    },

                    {
                        name: '3',
                        type: 'pie',
                        clockWise: false,
                        radius: ['45%', '60%'],
                        itemStyle: dataStyle,
                        data: [
                            {
                                value: 10,
                                name: '10% Skill Demand'
                            },
                            {
                                value: 90,
                                name: 'invisible',
                                itemStyle: placeHolderStyle
                            }
                        ]
                    }
                ]
            };

            // Apply options
            // ------------------------------

            // stacked_columns.setOption(stacked_columns_options);
            infographic_donut.setOption(infographic_donut_options);
            surplus_stacked_columns.setOption(surplus_stacked_columns_options);
            pie_timeline.setOption(pie_timeline_options);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                    // stacked_columns.resize();
                    infographic_donut.resize();
                    surplus_stacked_columns.resize();
                    pie_timeline.resize();
                }, 200);
            }
        }
    );






});


(function (window, document, $) {
    'use strict';

    /*************************************************
*               Cost Revenue Stats               *
*************************************************/
$(document).ready(function(){



    new Chartist.Line('#cost-revenue', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        series: [
            [
                { meta: 'Revenue', value: 5 },
                { meta: 'Revenue', value: 3 },
                { meta: 'Revenue', value: 6 },
                { meta: 'Revenue', value: 3 },
                { meta: 'Revenue', value: 8 },
                { meta: 'Revenue', value: 5 },
                { meta: 'Revenue', value: 8 },
                { meta: 'Revenue', value: 12 },
                { meta: 'Revenue', value: 7 },
                { meta: 'Revenue', value: 14 },

            ]
        ]
    }, {
        low: 0,
        high: 18,
        fullWidth: true,
        showArea: true,
        showPoint: true,
        showLabel: false,
        axisX: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        axisY: {
            showGrid: false,
            showLabel: false,
            offset: 0
        },
        chartPadding: 0,
        plugins: [
            Chartist.plugins.tooltip()
        ]
    }).on('draw', function (data) {
        if (data.type === 'area') {
            data.element.attr({
                'style': 'fill: #28D094; fill-opacity: 0.2'
            });
        }
        if (data.type === 'line') {
            data.element.attr({
                'style': 'fill: transparent; stroke: #28D094; stroke-width: 4px;'
            });
        }
        if (data.type === 'point') {
            var circle = new Chartist.Svg('circle', {
                cx: [data.x], cy: [data.y], r: [7],
            }, 'ct-area-circle');
            data.element.replace(circle);
        }
    });

})


})(window, document, jQuery);