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
                    el-card
                      el-row
                        el-col(:span="12")
                          el-row(style="margin: 10% 10%")
                            el-col(:span="8")
                              span 支持自提
                            el-col(:span="10")
                              span {{text}}
                    el-card
                        el-row
                        el-col(:span="12")
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

                        el-col(:span="12")
                          el-row(style="margin: 10% 10%")
                            el-col(:span="8")
                              span 商家配送范围
                          el-row(style="margin: 10% 10%")
                            el-col(:span="10")
                              img(src="http://tcg.czyugang.cn:8091/images/web%E4%B8%A8%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0-%E5%BC%80%E5%BA%97%E6%9C%8D%E5%8A%A1/regen/u508.png")


                    el-card
                        el-row
                          el-col(:span="12")
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
                            el-row(style="margin: 10% 10%")
                              el-col(:span="8")
                                span 平台配送范围
                            el-row(style="margin: 10% 10%")
                              el-col(:span="10")
                                img(src="http://tcg.czyugang.cn:8091/images/web%E4%B8%A8%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0-%E5%BC%80%E5%BA%97%E6%9C%8D%E5%8A%A1/regen/u508.png")

                    el-col(:span="12")

              //- 合同信息
              el-tab-pane(label="合同信息" name="4")
                el-card
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同开始时间
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 结束时间
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同法人
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同编号
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 店铺到期时间
                    el-col(:span="10")
                      span {{text}}

              //- 证件信息
              el-tab-pane(label="证件信息" name="5")
                el-card
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      h4 身份证
                  el-row(style="margin: 5% 5%")
                    el-col(:span="18")
                      img(src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513936845220&di=a5901eeeff3cb249b688e46ddd3faa90&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20160902%2Fde7f74cba5bf4c5f929faa7d27162aa6_th.jpeg")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      h4 合同扫描件
                  el-row(style="margin: 5% 5%")
                    el-col(:span="18")
                      img(src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514531895&di=c45f17e1b6ee0b979099a649263155c5&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20140624%2Fbki-20140624201012-1134241458.jpg")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      h4 营业执照
                  el-row(style="margin: 5% 5%")
                    el-col(:span="18")
                      img(src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3735704030,135664419&fm=27&gp=0.jpg")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      h4 餐饮许可证
                  el-row(style="margin: 5% 5%")
                    el-col(:span="18")
                      img(src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=188267519,3543603322&fm=27&gp=0.jpg")
              //- 关联人员
              el-tab-pane(label="关联人员" name="6")
                el-card
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 业务经理
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系电话
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 是否已联系
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 客服经理
                    el-col(:span="10")
                      span {{text}}
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 客服电话
                    el-col(:span="10")
                      span {{text}}

              el-row(style="text-align:center; margin-top:3%; margin-left:35% ")
                el-col(:span="5")
                  el-button(round type="success") 通过
                el-col(:span="5")
                  el-button(round type="danger") 拒绝申请
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
