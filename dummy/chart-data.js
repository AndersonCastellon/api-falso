const chartData = [
    {
        "id": 1,
        "type": "kpi",
        "total": 3500
    },
    {
        "id": 2,
        "type": "kpi",
        "total": 58569
    },
    {
        "id": 3,
        "type": "kpi",
        "total": 3285478
    },
    {
        "id": 4,
        "type": "kpi",
        "total": 2478569
    },
    {
        "id": 5,
        "labels": [
            "Enero",
            "Febrero",
            "Marzo"
        ],
        "type": "bar",
        "total": 35555,
        "datasets": [
            {
                "type": "bar",
                "data": [
                    100,
                    150,
                    95
                ],
                "backgroundColor": "#2196F3",
                "hoverBackgroundColor": "#2196F3",
                "label": "Migo"
            },
            {
                "type": "bar",
                "data": [
                    200,
                    100,
                    250
                ],
                "backgroundColor": "#63ABFD",
                "hoverBackgroundColor": "#63ABFD",
                "label": "Tarjeta contra entrega"
            },
            {
                "type": "bar",
                "data": [
                    252,
                    230,
                    190
                ],
                "backgroundColor": "#E0E0E0",
                "hoverBackgroundColor": "#E0E0E0",
                "label": "Pago en efectivo"
            },
            {
                "type": "line",
                "data": [
                    384,
                    326.6667,
                    480.33
                ],
                "backgroundColor": "#E0E0E0",
                "hoverBackgroundColor": "#E0E0E0",
                "label": "Promedio"
            }
        ]
    },
    {
        "id": 6,
        "labels": [
            "Migo",
            "Tarjeta contra entrega",
            "Pago en efectivo"
        ],
        "type": "doughnut",
        "total": 250000,
        "datasets": [
            {
                "data": [
                    5000,
                    520,
                    9650
                ],
                "backgroundColor": [
                    "#3E68F2",
                    "#63ABFD",
                    "#7600FF"
                ],
                "hoverBackgroundColor": [
                    "#3E68F2",
                    "#63ABFD",
                    "#7600FF"
                ],
                "label": "Total"
            }
        ]
    },
    {
        "id": 7,
        "labels": [
            "No hay cobertura",
            "Nuevo rango",
            "En rango"
        ],
        "type": "pie",
        "total": 250000,
        "datasets": [
            {
                "data": [
                    5000,
                    520,
                    9650
                ],
                "backgroundColor": [
                    "#3E68F2",
                    "#63ABFD",
                    "#7600FF"
                ],
                "hoverBackgroundColor": [
                    "#3E68F2",
                    "#63ABFD",
                    "#7600FF"
                ],
                "label": "Total"
            }
        ]
    },
    {
        "id": 8,
        "labels": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo"
        ],
        "type": "area",
        "total": 2500000000,
        "datasets": [
            {
                "data": [
                    100,
                    120,
                    150,
                    170,
                    180,
                    170,
                    160
                ],
                "backgroundColor": "rgba(62, 104, 242, 0.4)",
                "borderColor": "rgba(62, 104, 242, 0.4)",
                "hoverBackgroundColor": "rgba(62, 104, 242, 0.4)",
                "pointBackgroundColor": "rgba(62, 104, 242, 0.4)",
                "pointHoverBackgroundColor": "#3E68F2",
                "pointHoverBorderColor": "#3E68F2",
                "label": "Migo"
            },
            {
                "data": [
                    200,
                    220,
                    250,
                    290,
                    300,
                    270,
                    100
                ],
                "backgroundColor": "rgba(99, 171, 253, 0.4)",
                "borderColor": "rgba(99, 171, 253, 0.4)",
                "hoverBackgroundColor": "rgba(99, 171, 253, 0.4)",
                "pointBackgroundColor": "rgba(99, 171, 253, 0.4)",
                "pointHoverBackgroundColor": "#63ABFD",
                "pointHoverBorderColor": "#63ABFD",
                "label": "Pago contra entrega"
            }
        ]
    },
    {
        "id": 15,
        "total": 2000,
        "datasets": [
            {
                "label": "Migo",
                "value": 5000,
                "backgroundColor": "#3E68F2"
            },
            {
                "label": "Tarjeta contra entrega",
                "value": 2500
            },
            {
                "label": "Pago en efectivo",
                "value": 500,
                "backgroundColor": "#3E68F2"
            },
            {
                "label": "Pagos cancelados",
                "value": 200
            }
        ]
    },
    {
        "id": 16,
        "type": "kpi",
        "total": 74125
    },
    {
        "id": 17,
        "type": "kpi",
        "total": 3500
    },
    {
        "id": 18,
        "type": "kpi",
        "total": 26985
    },
    {
        "id": 19,
        "type": "kpi",
        "total": 58746
    }
]

module.exports = chartData