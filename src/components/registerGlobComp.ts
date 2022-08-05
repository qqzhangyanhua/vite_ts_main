/*
 * @Author: ZYH
 * @Date: 2022-08-04 15:16:14
 * @LastEditTime: 2022-08-04 15:16:15
 * @Description:
 */
import type { App } from "vue";

import {
  Button,
  Input,
  Layout,
  Select,
  Row,
  Col,
  Form,
  Upload,
  Radio,
  DatePicker,
  Checkbox,
  Anchor,
  Tabs,
  Cascader,
  InputNumber,
  Space,
  Breadcrumb,
  Descriptions,
  Menu
} from "ant-design-vue";

export function registerGlobComp(app: App) {
  app
    .use(Input)
    .use(Button)
    .use(Layout)
    .use(Select)
    .use(Row)
    .use(Col)
    .use(Form)
    .use(Upload)
    .use(Radio)
    .use(Checkbox)
    .use(DatePicker)
    .use(Anchor)
    .use(Tabs)
    .use(Cascader)
    .use(InputNumber)
    .use(Space)
    .use(Breadcrumb)
    .use(Descriptions)
    .use(Menu);
}
