<template lang="pug">
  div
    el-container
      el-header
        el-row
          el-col(:span="24")
            el-tabs(v-model="activeName" )
              //- 未审核、初审
              el-tab-pane(label="商家信息" name="1")
                el-card
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 用户账号
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 申请时间
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 审核人
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 所在城市
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 商家名称
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 商家类型
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系人
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系电话
                    el-col(:span="10")
                      span {{text}}

              //- 审核通过列表
              el-tab-pane(label="店铺信息" name="2")
                el-card
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺名称
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺地址
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 位置
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺分类
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 非营业时间下单
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺保证金
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺到期时间
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 结算点数
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 结算周期
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 所属商圈
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 支持预售
                    el-col(:span="10")
                      span {{text}}

              //- 审核不通过列表
              el-tab-pane(label="配送设置" name="3")
                el-card
                  el-row
                    el-col(:span="12")
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 支持自提
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 商家配送范围
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 商家配送费
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 商家起送价
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 平台配送范围
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 平台起送价
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 配送费分担
                        el-col(:span="10")
                          span {{text}}
                      el-row(style="margin: 10% 10%")
                        el-col(:span="8")
                          span 支持预售
                        el-col(:span="10")
                          span {{text}}

                    el-col(:span="12")

              //- 审核不通过列表
              el-tab-pane(label="合同信息" name="4")
                el-card
                  el-row

              //- 审核不通过列表
              el-tab-pane(label="证件信息" name="5")
                el-card
                  el-row

              //- 审核不通过列表
              el-tab-pane(label="关联人员" name="6")
                el-card
                  el-row

</template>

<script>
  export default {
    data () {
      return {
        text: '11',
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
    }
  }
</script>
