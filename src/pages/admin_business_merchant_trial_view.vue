<template lang="pug">
  div
    el-container
      el-main
        el-tabs(v-model="activeName" )
          el-tab-pane(label="申请资料" name="1")
            el-card
              el-row(style="margin: 5% 5%")
                el-col(:span="8")
                  span 商品名称
                el-col(:span="10")
                  span {{text}}
              el-row(style="margin: 5% 5%")
                el-col(:span="8")
                  span 商户类型
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
              el-row(style="margin: 5% 5%")
                el-col(:span="8")
                  span 店铺地址
                el-col(:span="10")
                  span {{text}}
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
                  span 审核结果
                el-col(:span="10")
                  span {{text}}

          el-tab-pane(label="资料录入" name="2")
            el-card
              el-row
                el-col(:sapn="24")
                  el-steps(:active="active")
                    el-step(title="商家信息" icon="el-icon-edit")
                    el-step(title="店铺信息" icon="el-icon-edit")
                    el-step(title="配送设置" icon="el-icon-setting")
                    el-step(title="合同信息" icon="el-icon-document")
                    el-step(title="证件上传" icon="el-icon-upload")
                    el-step(title="关联人员" icon="el-icon-star-off")

              el-row(style="text-align:center")
                el-card(v-if="show.merchant")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 用户账号
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 所在城市
                    el-col(:span="10")
                      el-cascader(:options="options2" @active-item-change="handleItemChange" :props="props")

                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 商家名称
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 商家类型
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系人
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系电话
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)

              el-row(style="text-align:center")
                el-card(v-if="show.store")
                  el-row
                    el-col(:span="14")
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 店铺名称
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 店铺地址
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 位置
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 店铺分类
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 店铺保证金
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 店铺到期时间
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 结算点数
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 结算周期
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)
                      el-row(style="margin: 5% 5%")
                        el-col(:span="8")
                          span 所属商圈
                        el-col(:span="12")
                          el-input(placeholder="请输入"  clearable)

                    el-col(:span="10")
                      img(src="http://tcg.czyugang.cn:8091/images/web%E4%B8%A8%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0-%E5%BC%80%E5%BA%97%E6%9C%8D%E5%8A%A1/regen/u508.png")


              el-row(style="text-align:center")
                el-card(v-if="show.setting")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="6")
                      span 物流信息
                    el-col(:span="4")
                      el-checkbox(v-model="checked") 自提
                    el-col(:span="4")
                      el-checkbox(v-model="checked") 商家配送
                    el-col(:span="4")
                      el-checkbox(v-model="checked") 平台配送


              el-row(style="text-align:center")
                el-card(v-if="show.contract")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同开始时间
                    el-col(:span="6")
                      el-date-picker(v-model="StartTime" type="date" placeholder="选择日期")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同结束时间
                    el-col(:span="6")
                      el-date-picker(v-model="EndTime" type="date" placeholder="选择日期")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同法人
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 合同编号
                    el-col(:span="10")
                      el-input(placeholder="请输入"  clearable)

              el-row(style="text-align:center")
                el-card(v-if="show.credentials")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="6")
                      span 身份证
                  el-row
                    el-col(:span="14")
                      el-upload(action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove")
                       i(class="el-icon-plus")

                      el-dialog(:visible.sync="dialogVisible" size="tiny")
                       img(width="100%" :src="dialogImageUrl" alt="")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="6")
                      span 合同扫描件
                  el-row
                    el-col(:span="14")
                      el-upload(action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove")
                       i(class="el-icon-plus")

                      el-dialog(:visible.sync="dialogVisible" size="tiny")
                       img(width="100%" :src="dialogImageUrl" alt="")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="6")
                      span 营业执照
                  el-row
                    el-col(:span="14")
                      el-upload(action="https://jsonplaceholder.typicode.com/posts/"
                       list-type="picture-card"
                       :on-preview="handlePictureCardPreview"
                       :on-remove="handleRemove")
                       i(class="el-icon-plus")

                      el-dialog(:visible.sync="dialogVisible" size="tiny")
                       img(width="100%" :src="dialogImageUrl" alt="")


              el-row(style="text-align:center")
                el-card(v-if="show.contact")
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 业务经理
                    el-col(:span="12")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 联系电话
                    el-col(:span="12")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 是否已联系
                    el-col(:span="4")
                      el-radio(v-model="isContact" label="YES") 是
                    el-col(:span="4")
                      el-radio(v-model="isContact" label="NO") 否
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 客服经理
                    el-col(:span="12")
                      el-input(placeholder="请输入"  clearable)
                  el-row(style="margin: 5% 5%")
                    el-col(:span="8")
                      span 客服电话
                    el-col(:span="12")
                      el-input(placeholder="请输入"  clearable)

              el-row(style="text-align:center")
                el-col(:sapn="5")
                  el-button(style="margin-top: 12px;" @click="last" v-if="showLast") 上一步
                  el-button(style="margin-top: 12px;" @click="next" v-if="showNext") 下一步
                  el-button(style="margin-top: 12px;" @click="commit" v-if="showCommit") 提交

</template>

<script>
  export default {
    data () {
      return {
        isContact: '',
        StartTime: '',
        EndTime: '',
        checked: [],
        dialogImageUrl: '',
        dialogVisible: false,
        showCommit: false,
        showLast: true,
        showNext: true,
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        show: {
          merchant: true,
          store: false,
          setting: false,
          contract: false,
          credentials: false,
          contact: false
        },
        text: 1111,
        active: 0,
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
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      },
      handleItemChange (val) {
        console.log('active item:', val)
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }]
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }]
          }
        }, 300)
      },
      last () {
        if (this.active-- < 1) {
          this.active = 5
        }
        if (this.active === 0) {
          this.show.merchant = true
          this.show.store = false
          this.show.contact = false
          this.showLast = false
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 1) {
          this.show.store = true
          this.show.merchant = false
          this.show.setting = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 2) {
          this.show.store = false
          this.show.setting = true
          this.show.contract = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 3) {
          this.show.setting = false
          this.show.contract = true
          this.show.credentials = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 4) {
          this.show.contract = false
          this.show.credentials = true
          this.show.contact = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 5) {
          this.show.credentials = false
          this.show.contact = true
          this.showLast = true
          this.showNext = false
          this.showCommit = true
        }
      },
      next () {
        if (this.active++ > 4) {
          this.active = 0
        }
        if (this.active === 1) {
          this.show.store = true
          this.show.merchant = false
          this.show.setting = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 2) {
          this.show.store = false
          this.show.setting = true
          this.show.contract = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 3) {
          this.show.setting = false
          this.show.contract = true
          this.show.credentials = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 4) {
          this.show.contract = false
          this.show.credentials = true
          this.show.contact = false
          this.showLast = true
          this.showNext = true
          this.showCommit = false
        }
        if (this.active === 5) {
          this.show.credentials = false
          this.show.contact = true
          this.showNext = false
          this.showCommit = true
        }
      },
      commit () {
        console.log(1)
      }
    }
  }
</script>
