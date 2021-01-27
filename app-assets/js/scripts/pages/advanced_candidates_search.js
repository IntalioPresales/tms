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
            echarts: "app-assets/js/visualization/echarts"
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            "echarts",
            "echarts/theme/limitless",
            "echarts/chart/pie",
            "echarts/chart/funnel",
            "echarts/chart/bar",
            "echarts/chart/line"
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var basic_donut = ec.init(document.getElementById("basic_donut"), limitless);

            basic_donut_options = {

                // Add title
                title: {
                    show: true,
                    textStyle: {
                        fontSize: 26,
                        fontWeight: 500,
                        color: "#16e982"
                    },
                    subtextStyle: {
                        fontSize: 15,
                        fontWeight: 500,
                        color: "#eeffff"
                    },
                    text: 16,
                    subtext: "Profile",
                    x: "center",
                    y: "center",
                },

                // Add legend



                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: "Type",
                        type: "pie",
                        radius: ['60%', '87%'],
                        center: ['50%', '50.5%'],
                        // center: [20%, 50.5%],

                        itemStyle: {
                            normal: {
                                label: {
                                    position: "inner",
                                },
                                labelLine: {
                                    show: false
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter: `{d}%`,
                                    position: "inner",
                                    textStyle: {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#000"
                                    }
                                }
                            }
                        },

                        data: [
                            { value: 18, name: "F" },
                            { value: 30, name: "HP" },
                            { value: 30, name: "WS" },
                            { value: 22, name: "M" },
                        ],
                        left: 400,
                        top: "17%",
                        width: 170
                    }
                ]
            };


            // Apply options
            // ------------------------------

            basic_donut.setOption(basic_donut_options);
            // basic_donut2.setOption(option);

            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                    basic_donut.resize();
                    // basic_donut2.resize();
                }, 200);
            }
        }
    );
});











