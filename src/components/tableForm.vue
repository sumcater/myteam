<template>
  <div class="tableForm-wrap">
    <el-table
      ref="tableData"
      border
      :data="tableData"
      class="tb-edit"
      highlight-current-row
      
    >
      <el-table-column label="日期"  align="center">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.date" placeholder="请输入内容"></el-input>
          <span>{{scope.row.date}}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名"  align="center">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.name" placeholder="请输入内容"></el-input>
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address"  label="地址" align="center">
        <template slot-scope="scope">
          <el-input size="small" v-model="scope.row.address" placeholder="请输入内容"></el-input>
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column label  align="center" label-class-name="opt" class-name="opt">
        <template slot-scope="scope">
          <i class="el-icon-circle-plus-outline" @click="add(scope.$index, scope.row)"></i>
          <i class="el-icon-remove-outline"  v-if="scope.$index!==0||tableData.length>1" @click="del(scope.$index, scope.row)"></i>
         
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TableForm",
  data() {
    return {
      currentIndex:0,
      tableIndex:0,
      tableData: [
        {
          date: "",
          name: "",
          address: ""
        },
      ]
    };
  },
  methods: {
    add(index, row) {
      let form = {
        date: "",
        name: "",
        address: ""
      };
      this.tableData.splice(index+1,0,form);
      this.addCurrent=true
      console.log(index,this.tableData.length-1);
      
    },
    del(index, row) {
      this.tableData=this.tableData.filter((n,i)=>i!==index)
    }
  }
};
</script>
<style >
.tb-edit .el-input  {
  display: none;
}
.tb-edit .current-row .el-input {
  display: block;
}
.tb-edit .current-row .el-input + span {
  display: none;
}
i {
  font-size: 30px;
}
.opt{
  border:none !important;
}
</style>
