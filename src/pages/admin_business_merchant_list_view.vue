<template lang="pug">
  div
    el-container
      el-header
        el-row
          el-col(:span="7")
            el-date-picker(type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" v-model="datapicker")
          el-col(:span="7")
            el-select(v-model="select" placeholder="请选择")
              el-option(v-for="item in items" :key="item.value" :label="item.lable" :value="item.value")
          el-col(:span="7")
            el-input(placeholder="请选择日期" suffix-icon="el-icon-search" v-model="input1")
          el-col(:span="3")
            el-button.round 查找
        el-row(style="margin-top:5%")
          el-col(:span="24")
            el-tabs(v-model="activeName" )
              //- 未审核、初审
              el-tab-pane(label="未审核、初审" name="1")
                el-card
                  el-row
                    el-table(:data="tabledata" style="width: 100%")
                      el-table-column(prop="account" label="用户账号")
                      el-table-column(prop="creatTime" label="申请时间")
                      el-table-column(prop="status" label="审核状态")
                      el-table-column(prop="operator" label="审核人")
                      el-table-column(porp="operation" label="操作")
                        template(slot-scope="scope")
                          el-button.round( @click="trial(scope.row.account)") 初审
                          el-button(type="primary" @click="retrial(scope.row.account)") 复审
                  el-row(style="text-align:center; margin-top:3%")
                    el-pagination(background layout="prev, pager, next" :total="10")
              //- 审核通过列表
              el-tab-pane(label="审核通过" name="2")
                el-card
                  el-row
                    el-table(:data="tabledata" style="width: 100%")
                      el-table-column(prop="account" label="用户账号")
                      el-table-column(prop="creatTime" label="申请时间")
                      el-table-column(prop="status" label="审核状态")
                      el-table-column(prop="operator" label="审核人")
                      el-table-column(porp="reviewOfficer" label="复审人员")
                  el-row(style="text-align:center; margin-top:3%")
                    el-pagination(background layout="prev, pager, next" :total="10")
              //- 审核不通过列表
              el-tab-pane(label="审核不通过" name="3")
                el-card
                  el-row
                    el-table(:data="tabledata" style="width: 100%")
                      el-table-column(prop="account" label="用户账号")
                      el-table-column(prop="creatTime" label="申请时间")
                      el-table-column(prop="status" label="审核状态")
                      el-table-column(prop="operator" label="审核人")
                      el-table-column(porp="reviewOfficer" label="拒绝原因")
                  el-row(style="text-align:center; margin-top:3%")
                    el-pagination(background layout="prev, pager, next" :total="10")
</template>

<script>
  export default {
    data () {
      return {
        tabledata: [
          {
            account: 'account',
            creatTime: '2017-12-17',
            status: 'enable',
            operator: 'admin'
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
      handleEdit (index, row) {
        console.log(index, row)
      },
      trial (account) {
        let id = account
        this.$router.push({ path: '/admin/business/merchant/trial?id=' + id })
      },
      retrial (account) {
        let id = account
        this.$router.push({ path: '/admin/business/merchant/retrial?id=' + id })
      }
    }
  }
</script>
