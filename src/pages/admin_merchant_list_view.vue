<template lang="pug">
  div
    el-container
      el-header
        el-row
          el-col(:span="10")
            el-button(type="info" plain) 添加商家
            el-button 筛选
            el-button 批量操作
          el-col(:span="7")
            el-input(placeholder="请填写" suffix-icon="el-icon-search" v-model="input1")
          el-col(:span="3")
            el-button.round 查找
      el-main
        el-row(style="margin-top:5%")
          el-col(:span="24")
            el-card
              el-row
                el-table(:data="tabledata" style="width: 100% text-align:center" @selection-change="handleSelectionChange")
                  el-table-column(type="selection" width="55")
                  el-table-column(label="商家编号")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.ID }}
                  el-table-column(prop="name" label="商家名称")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.name }}
                  el-table-column(prop="contact" label="商家联系人")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.contact }}
                  el-table-column(porp="creatTime" label="创建时间")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.creatTime }}
                  el-table-column(porp="manager" label="业务经理")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.manager }}
                  el-table-column(porp="status" label="状态")
                    template(slot-scope="scope")
                      el-button(v-if="scope.row.status == 'enable'" type="danger" plain) 禁用
                      el-button(v-if="scope.row.status == 'disable'" type="success" plain) 启用
                  el-table-column(porp="contractSatus" label="合同状态")
                    template(slot-scope="scope")
                      span(style="margin-left: 10px") {{ scope.row.contractSatus }}
                  el-table-column(porp="operation" label="操作")

                    template(slot-scope="scope")
                      el-row(style="margin:5% 5%")
                        el-col(:span="12")
                          el-button(@click="checkout(scope.row.id)" type="primary" plain) 查看
                      el-row(style="margin:5% 5%")
                        el-col(:span="12")
                          el-button(@click="edit(scope.row.id)" type="success" plain) 编辑
              el-row(style="text-align:center; margin-top:3%")
                el-pagination(background layout="prev, pager, next" :total="10")

</template>

<script>
  export default {
    data () {
      return {
        multipleSelection: [],
        tabledata: [
          {
            ID: 1,
            name: 'name',
            contact: '联系人',
            creatTime: '2017-01-01',
            manager: 'manager',
            status: 'enable',
            contractSatus: 'stop'
          },
          {
            ID: 2,
            name: 'name',
            contact: '联系人',
            creatTime: '2017-01-01',
            manager: 'manager',
            status: 'disable',
            contractSatus: 'stop'
          }
        ],
        activeName: '1',
        datapicker: '',
        select: '',
        input1: '',
        items: [
          {
            lable: 'label',
            value: 'values'
          }
        ]
      }
    },
    methods: {
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      handleEdit (index, row) {
        console.log(index, row)
      },
      checkout (account) {
        let id = account
        this.$router.push({ path: '/admin/merchant/checkout?id=' + id })
      },
      edit (account) {
        let id = account
        this.$router.push({ path: '/admin/merchant/edit?id=' + id })
      }
    }
  }
</script>
