<template>
    <label class="hm-checkbox" :class="{'is-checked': isCheck}">
    <span class="hm-checkbox__input">
      <input type="checkbox" class="hm-checkbox__original"
      :name="name"
      v-model="model"
      :value="label"
      >
    </span>
      <slot></slot>
        <template class="hm-checkbox__label" v-if="!$slots.default">
            {{label}}
    </template>
    </label>
</template>

<script>
    export default {
        name: "checkbox",
        inject: {
            checkedBoxGroup: {
                default: ''
            }
        },
        computed : {
            isGroup () {
                return this.checkedBoxGroup
            },
           model: {
             get () {
                 return this.isGroup ? this.checkedBoxGroup.value : this.value
             },
             set(value) {
                 this.isGroup ? this.checkedBoxGroup.$emit('input', value) : this.$emit('input', value)
                 console.log(value);
             }
         },
            isCheck () {
             // 被checkedBoxGroup包裹 为数组  否则为布尔值
                return this.isGroup ? this.model.include(this.label) : this.model
            }
        },
        props: {
            value: {
              type: Boolean,
              default: false
            },
            name: {
              type: String,
              default: ''
            },
            label: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped lang="scss">
    .hm-checkbox {
        color: #606266;
        font-weight: 500;
        font-size: 14px;
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        user-select: none;
        margin-right: 30px;
        .hm-checkbox__input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            .hm-checkbox__inner {
                display: inline-block;
                position: relative;
                border: 1px solid #dcdfe6;
                border-radius: 2px;
                box-sizing: border-box;
                width: 14px;
                height: 14px;
                background-color: #fff;
                z-index: 1;
                transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
                &:after {
                    box-sizing: content-box;
                    content: "";
                    border: 1px solid #fff;
                    border-left: 0;
                    border-top: 0;
                    height: 7px;
                    left: 4px;
                    position: absolute;
                    top: 1px;
                    transform: rotate(45deg) scaleY(0);
                    width: 3px;
                    transition: transform .15s ease-in .05s;
                    transform-origin: center;
                }
            }
            .hm-checkbox__original {
                width: 15px;
                height: 15px;
            }
        }
        .hm-checkbox__label {
            display: inline-block;
            padding-left: 10px;
            line-height: 19px;
            font-size: 14px;
            color: #409eff;
        }
        .hm-checkbox .is-checked {
            color: blue;
            .hm-checkbox__input{
                .hm-checkbox__inner{
                    background-color: #409eff;
                    border-color: #409eff;
                    &:after{
                        transform: rotate(45deg) scaleY(1);
                    }
                }
            }
        }
    }
</style>