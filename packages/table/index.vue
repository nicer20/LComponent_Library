<template>
    <table class="l-table">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.dataIndex">
                    {{ column.title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.key">
                <td v-for="column in columns" :key="column.dataIndex">
                    {{ item[column.dataIndex] }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
    data: {
        type: Array,
        required: true,

    },
    columns: {
        type: Array,
        required: true,
    }
})

function createTable(columns: any[] | undefined, data: any[] | undefined) {
    if (columns == undefined || data == undefined) {
        return null
    }
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
onMounted(() => createTable(props.columns, props.data))
</script>
<style scoped>
.l-table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
}
</style>