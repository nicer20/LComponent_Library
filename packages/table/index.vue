<template>
    <table class="l-table">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.dataIndex" :class="[getColumnClass(column)]"
                    @click="changeOrder(column)">
                    {{ column.title }}

                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sortedData" :key="item.key" :class="lClass">
                <td v-for="column in columns" :key="column.dataIndex" :class="lClass">
                    {{ item[column.dataIndex] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { reactive, onMounted, computed } from 'vue';

const props = defineProps({
    data: {
        type: Array<any>,
        required: true,

    },
    columns: {
        type: Array<any>,
        required: true,
    },
    stripe: Boolean,
    border: Boolean,
    sortColumn: Object as () => sortColumn,

})

interface sortColumn {
    prop: any,
    order: any
}
const lClass = computed(() => {
    return [
        props.stripe ? 'l-table-stripe' : ' ',
        props.border ? 'l-table-border' : ' '
    ]
});
const getColumnClass = (column: any) => {
    const classes = [...lClass.value];

    if (column.dataIndex === props.sortColumn?.prop) {
        classes.push(props.sortColumn?.order);
    }

    return classes;
};

const sortedData = computed(() => {
    const sortedColumn = props.sortColumn?.prop;
    var sortOrder = props.sortColumn?.order;

    if (sortedColumn && sortOrder) {
        const column = sortedColumn;
        const order = sortOrder === 'asc' ? 1 : -1;

        const sorted = [...props.data].sort((a, b) => {
            if (a[column] < b[column]) return -order;
            if (a[column] > b[column]) return order;
            return 0;
        });

        return sorted;
    }

    return props.data;
});
const changeOrder = (column: any) => {
    if (props.sortColumn != undefined) {
        if (props.sortColumn.prop === column.dataIndex) {
            if (props.sortColumn.order === 'asc') {
                props.sortColumn.order = 'desc';
            } else {
                props.sortColumn.order = 'asc';
            }
        } else {
            // props.sortColumn.prop = column.dataIndex;
            // props.sortColumn.order = 'asc';
        }
    }
    getColumnClass(column);
    // console.log(updatedColumnClass);
    // console.log(props.sortColumn);

    // 在这里更新组件的状态或样式，：
    // this?.columnClass = updatedColumnClass;

};

// function isStripe(stripe: Boolean) {
//     // console.log(stripe);
//     if (stripe != false) {
//         const tableRows = document.querySelectorAll('table[stripe] tbody>tr');
//         console.log(tableRows);

//         tableRows.forEach((row, index) => {
//             if (index % 2 === 0) {
//                 (row as HTMLElement)["style"].backgroundColor = 'lightgray';
//             } else {
//                 (row as HTMLElement)["style"].backgroundColor = 'white';
//             }
//         });
//         return 't';
//     } else {
//         return 'f';
//     }
// }


function createTable(columns: any[], data: any[]) {
    return {
        columns,
        data
    }
    // if (columns == undefined || data == undefined) {
    //     return null
    // }
    // var table = document.getElementsByClassName("l-table");

    // // 创建表头
    // var thead = document.createElement("thead");
    // var tr = document.createElement("tr");
    // for (var i = 0; i < columns.length; i++) {
    //     var th = document.createElement("th");
    //     th.innerHTML = columns[i];
    //     tr.appendChild(th);
    // }
    // thead.appendChild(tr);
    // for (var i = 0; i < table.length; i++) {
    //     table[i].appendChild(thead);
    // }

    // // 创建表格内容
    // var tbody = document.createElement("tbody");
    // for (var i = 0; i < data.length; i++) {
    //     var tr = document.createElement("tr");
    //     for (var j = 0; j < columns.length; j++) {
    //         var td = document.createElement("td");
    //         td.innerHTML = data[i][columns[j]];
    //         tr.appendChild(td);
    //     }
    //     tbody.appendChild(tr);
    // }
    // for (let i = 0; i < table.length; i++) {
    //     table[i].appendChild(tbody);
    // }
}
// function sortBy(sortColumn: any) {


//     return sortedData


// }
// const handleSort = (column) => {
//     if (sortColumn === column) {
//         sortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
//     } else {
//         sortColumn = column;
//         sortOrder = 'asc';
//     }
// };
onMounted(() => {
    createTable(props.columns, props.data);
    // isStripe(props.stripe);
    // if (props.sortColumn) {
    //     sortBy(props.sortColumn)
    // }
});
</script>
<style scoped lang="scss">
.l-table {
    border-collapse: collapse;
    width: 100%;
}

.l-table-border {
    border: 1px solid black;
}

tr:hover {
    background: #f5f7fa;
}



tbody {
    tr:nth-child(2n+1) {
        .l-table-stripe {
            background-color: #d5d0d0;
        }
    }
}

th,
td {
    padding: 8px;
    text-align: left;
}

th {
    position: relative;
    cursor: pointer;
}

th::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px;
    border-color: transparent;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    transition: border-color 0.3s;
}

th.asc::after {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent rgb(112, 182, 255) transparent;
    opacity: 1;
}

th.desc::after {
    border-width: 5px 5px 0 5px;
    border-color: rgb(112, 182, 255) transparent transparent transparent;
    opacity: 1;
}
</style>