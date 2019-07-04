export default {
  devices: {
    device: '设备',
    deviceInfo: '基础信息',
    loraInfo: 'loRa 信息',
    deviceName: '设备名称',
    deviceNameRequired: '请输入设备名称',
    deviceType: '设备类型',
    deviceTypeRequired: '请选择设备类型',
    deviceID: '设备编号',
    deviceConsoleIP: '控制台 IP',
    deviceConsoleUsername: '控制台用户',
    deviceConsolePort: '控制台端口',
    deviceIDRequired: '8-36位字符，可包含数字、字母、下划线',
    warning: '如不填写, 系统将默认生成 36 位',
    productName: '所属产品',
    productNameRequired: '请选择所属产品',
    groupName: '所属分组',
    deviceStatus: '设备状态',
    blocked: '允许访问',
    isTrue: '是',
    isFalse: '否',
    createAt: '创建时间',
    lastConnection: '最近上线时间',
    createUser: '创建人',
    authInfo: '认证信息',
    or: '或',
    createProduct: '新建产品',
    manufacturer: '制造商',
    manufacturerRequired: '请输入制造商',
    serialNumber: '序列号',
    serialNumberRequired: '请输入序列号',
    softVersion: '软件版本',
    softVersionRequired: '请输入软件版本',
    hardwareVersion: '硬件版本',
    hardwareVersionRequired: '请输入硬件版本',
    description: '描述',
    descriptionRequired: '请添加描述',
    locationSelect: '位置选取',
    locationKey: '输入关键字选取地点',
    location: '设备位置',
    unableLocation: '无法获取该位置信息',
    locationRequired: '请选择设备位置',
    longitude: '经度',
    longitudeIsNumber: '经度必须为数字',
    latitude: '纬度',
    latitudeIsNumber: '纬度必须为数字',
    locationValidate: '请输入正确的格式',
    nextStep: '下一步',
    backStep: '返回上一步',
    authType: '认证方式',
    authTypeRequired: '请选择认证方式',
    autoCreateCerts: '是否自动创建证书',
    autoCreateCertsRequired: '请选择是否自动创建证书',
    autoCreatePopover: '如果选择是，将自动创建证书并绑定给该设备。',
    username: '连接用户名',
    usernameWarnig: '如不填写，将与设备编号一致',
    token: '设备密钥',
    tokenRequired: '请输入 token',
    filedLength: '长度在 8 到 32 个字符',
    deviceStatusLabel: '运行状态',
    connectedAt: '连接时间',
    clientIP: '客户端 IP',
    keepAlive: '心跳时间',
    baseInfo: '基本信息',
    runLog: '运行日志',
    event: '事件',
    deviceCode: '认证信息',
    mqttWarning: '设备连接MQTT服务器时，client_id为设备编号',
    mqtt: 'MQTT服务器信息',
    mqttssBroker: '证书',
    CoAP: 'CoAP服务器信息',
    coapssBroker: '证书',
    proxy: '代理订阅',
    proxyInfo1: '代理订阅是指：设备连接成功后，由服务器自动代理设备订阅某些主题，设备无须再次进行订阅操作。',
    proxyInfo2: '初始情况下，系统已默认为设备订阅了设备主题与分组主题，设备开发人员无须关心主题。',
    proxyInfo3: '控制端调用 API 时只需指定设备或分组，设备监听收到的消息并解析 payload 进行相应操作。',
    proxyInfo4: '当设备需要通过“主题”来区分消息时，平台也支持用户自定义代理订阅的主题（最多10个主题）。',
    proxyInfoWarning: '代理订阅不适于用CoAP协议的设备。',
    addSubscibe: '添加订阅',
    topicRequired: '请填写需要订阅的主题',
    addTopic: '添加主题订阅',
    addTopicSuccess: '添加订阅成功',
    bindCerts: '已绑定证书',
    addCert: '绑定证书',
    certName: '证书名称',
    enable: '是否可用',
    certs: '证书',
    certsRequired: '请选择证书',
    certInfo: '可输入证书名称搜索',
    createCert: '创建证书',
    certNotNull: '所选证书不能为空',
    payload: '载荷',
    addInstruction: '添加指令',
    publishStatusLabel: '下发状态',
    publishStatusContent: '下发内容',
    publishTopic: '下发主题',
    publishCreateAt: '下发时间',
    publishInstruct: '指令下发',
    controlType: '设备控制',
    publishTask: '添加任务',
    constantTimer: '固定定时',
    intervalTimer: '间隔定时',
    timerRanger: '请输入正确的下发时间',
    instructWarning1: '指令内容必须为 json 格式',
    instructWarning2: '默认发送到设备主题',
    needAck: '需要回执',
    isNeedAck: '是否需要回执',
    timingType: '定时类型',
    needNotAck: '不需要回执',
    softwarePackage: '软件包',
    softwarePackageRequired: '请选择软件包',
    publishSuccess: '指令下发成功',
    taskSuccess: '任务添加成功',
    instructError: '指令下发失败',
    taskName: '任务名称',
    taskNameRequired: '请填写任务名称',
    timerType: '下发方式',
    timerTypeRequired: '请选择下发方式',
    publishType: '下发对象',
    publishTypeRequired: '请选择下发对象',
    publishTime: '下发时间',
    publishTimeRequired: '请填写下发时间',
    dateTimePlaceholder: '请选择 日期-时间',
    repeatType: '重复方式',
    repeatTypeRequired: '请选择重复方式',
    timeNow: '立即下发',
    timeNoRepeat: '定时下发（不重复）',
    timeRepeat: '定时下发（重复）',
    hour: '按小时',
    everyHour: '每小时过 {min} 分钟',
    everyDay: '每天',
    minutes: '分钟',
    minutesRules: '时间范围在 1-59 分钟',
    hourRequired: '请输入 每小时的 1-59 分钟',
    day: '按日',
    dayRequired: '请选择 每天的00:01到23:59',
    week: '按周',
    weekRequired: '请选择周',
    weekTimeRequired: '请选择时间',
    Monday: '周一',
    Tuesday: '周二',
    Wednesday: '周三',
    Thursday: '周四',
    Friday: '周五',
    Saturday: '周六',
    Sunday: '周日',
    instructRecords: '下发记录',
    timingPublish: '定时下发',
    platformInstruct: '平台指令',
    customInstruct: '自定义指令',
    updateInstruct: '升级指令',
    lwm2mInstruct: 'LwM2M 标准指令',
    payloadRequired: '请填写下发内容',
    objectName: '对象名称',
    instance: '实例',
    instanceCount: '实例个数',
    itemCount: '属性个数',
    autoSubscibe: '自动订阅',
    devicesItems: '属性列表',
    instanceID: '实例ID',
    itemName: '属性名称',
    itemType: '属性类型',
    itemValue: '属性值',
    itemUnit: '单位',
    itemOperations: '可操作类型',
    read: '读取',
    write: '设置',
    execute: '执行',
    unsubscribe: '取消订阅',
    unsubscribing: '取消订阅中',
    subscribe: '订阅',
    subscribing: '订阅中',
    subInstruction: '订阅指令已发送，等待设备返回',
    autoSubSccuess: '自动订阅成功',
    autoSubCancel: '取消订阅成功',
    readSuccess: '读取成功',
    writeSuccess: '设置成功',
    executeSucceess: '执行成功',
    carrier: '运营商',
    physicalNetwork: '物理网络',
    tagName: '标签',
    includeDevices: '包含设备',
    addDevices: '添加设备',
    devicesImport: '设备导入',
    devicesExport: '设备导出',
    devicesLogin: '设备登录',
    instruct: '指令下发',
    deviceTask: '任务配置',
    createGroup: '创建分组',
    R: '读',
    W: '写',
    E: '执行',
    value: '内容',
    itemRequired: '请选择属性',
    instanceRequired: '请填写实例',
    valueRequired: '请填写内容',
    operRequired: '请选择操作',
    setValue: '设置值',
    dataPointsAll: '请填写所有的功能点的值',
    timeLimit: '时间范围须小于一周',
    upLinkSystem: '上联系统',
    upLinkSystemRequired: '请选择上联系统',
    parentDevice: '所属设备',
    parentDeviceRequired: '请选择所属设备',
    gateway: '所属网关',
    gatewayRequired: '请选择所属网关',
    autoSub: '自动订阅',
    autoSubRequired: '请选择是否开启自动订阅',
    IMEIRequired: '请输入设备IMEI',
    IMSIRequired: '请输入设备IMSI',
    metaData: '元数据',
    metaDataTitle: '元数据信息',
    metaDataTip: '您可以添加元数据以定义设备的定制属性，只能以 JSON 格式输入元数据。',
    netID: '网络 ID',
    netIDRequired: '请输入网络 ID',
    netIDlen6: '请输入 6 位 网络 ID',
    txChain: '链',
    txChainRequired: '请输入链',
    loraType: '入网方式',
    loraTypeRequired: '请选择入网方式',
    region: '发射频率',
    regionRequired: '请选择发射频率',
    char16: '16位字符',
    canJoin: '允许加入',
    char32: '32位字符',
    len15: '长度不能超过15位',
    len8to36: '长度为8-36位',
    appEUIRequired: '请输入 AppEUI',
    appEUILen16: '请输入 16 位 AppEUI',
    appKeyRequired: '请输入 AppKey',
    appkeylen32: '请输入 32 位 AppKey',
    fcntCheckRequired: '请选择 FCnt Check',
    NwkSKeyRequired: '请输入 NwkSKey',
    NwkSKeyLen32: '请输入 32 位 nwkSKey',
    appSKeyRequired: '请输入 AppSKey',
    appSKeylen32: '请输入 32 位 AppSKey',
    fcntUpRequired: '请输入 FCnt Up',
    fcntDownRequired: '请输入 FCnt Down',
    MACRequired: '请输入网关 MAC 地址',
    MACLen16: '请输入正确的 16 位 MAC 地址',
    index: '索引',
    indexRequired: '请输入索引值（0 - 255）',
    num0to255: '只能输入0-255的数字',
    DevEUIRequried: '请输入 DevEUI',
    DevEUILen16: '请输入 16 位 DevEUI',
    DevAddrRequired: '请输入 DevAddr',
    DevAddrLen8: '请输入 8 位 DevAddr',
    deviceConnect: '连接日志',
    viewMore: '查看更多',
    noRunLogs: '暂无运行日志',
    deviceAlerts: '设备告警',
    noAlerts: '暂无告警消息',
    deviceBaseInfo: '设备基础信息',
    locationInfo: '位置信息',
    locationPopover: '您可以通过在地图上直接选点来选择设备所在的位置，也可以通过直接输入具体的经纬度的方式来进行设备位置的添加。',
    typeError: '数据类型不正确',
    realtime: '实时数据',
    historyTime: '历史数据',
    reportedValue: '上报值',
    msgTime: '上报时间',
    chartHour: '时',
    cartDay: '日',
    chartMonth: '月',
    average: '平均值',
    noMetrics: '该分组所属产品未定义聚合指标',
    dataPoint: '功能点',
    lwm2mPath: 'LwM2M标准数据',
    itemSearch: '请输入属性名称搜索',
    allDevices: '全部设备（+）',
  },
  gateways: {
    gateway: '网关',
    gatewayName: '网关名称',
    gatewayNameRequired: '请输入网关名称',
    gatewayInfo: '网关信息',
    channels: '通道管理',
    addChannel: '添加通道',
    driveType: '驱动类型',
    channelTypeRequired: '请选择通道类型',
    COMRequired: '请输入 COM',
    COMLimit: 'COM 通道最多添加一个',
    IP: 'IP地址',
    IPRequired: '请输入 IP 地址',
    IPCorrect: '请输入正确的 IP',
    TCPLimt: 'TCP 通道最多添加九个',
    port: '端口',
    portRequired: '请输入端口',
    BaudRequired: '请选择 Baud',
    DataRequired: '请选择 Data',
    Stop: '请选择 Stop',
    Parity: '请选择 Parity',
    gatewayUpdateControl: '更新网关配置',
    confirmUpdate: '确认同步网关信息？',
    cloudProtocol: '上联协议',
    upLinkNetwork: '上联网络',
    upLinkNetworkRequired: '请选择上联网络',
    gatewayModel: '网关型号',
    gatewayModelRequired: '请选择网关型号',
    authType: '认证方式',
    authTypeRequired: '请选择认证方式',
    mac: 'MAC',
    macRequired: '请输入 MAC',
    gatewayLocation: '网关位置',
    gatewayLocationRequired: '请输入网关位置',
    gatewayID: '网关编号',
    gatewayUsername: '网关用户名',
    gatewayToken: '网关密钥',
    gatewayChannel: '网关通道',
    description: '网关描述',
    descriptionRequired: '请输入网关描述',
    deviceData: '设备数据',
    gatewayEvent: '网关事件',
    devices: '设备列表',
    gatewayStatus: '网关状态',
  },
  groups: {
    group: '分组',
    groupName: '分组名称',
    groupInfo: '分组信息',
    groupNameRequired: '请输入分组名称',
    groupID: '分组标识',
    groupIDRequired: '请输入分组标识',
    deviceNum: '设备数量',
    productName: '所属产品',
    productIDRequired: '请选择分组所属的产品',
    description: '分组描述',
    descriptionRequired: '请输入分组描述',
    createUser: '创建人',
    createAt: '创建时间',
    deviceControl: '设备控制',
    addInstruction: '添加指令',
    publishSuccess: '下发成功',
    publishFailure: '下发失败',
    groupPublishFailure: '分组下发失败',
    publishTimeout: '下发超时',
    groupDeviceLimit: '一个分组最多能绑定1000个设备',
    notNull: '所选设备不能为空',
    notCrossProduct: '分组设备不能跨产品',
    isCreated: '分组创建成功',
    addDevice: '立即添加设备',
    addCancel: '暂不添加',
    aggregated: '聚合数据',
    proxy: '代理订阅',
    gatewayNum: '网关数量',
  },
  certs: {
    cert: '证书',
    name: '名称',
    createUser: '创建人',
    createAt: '创建时间',
    enable: '是否可用',
    allowed: '可用',
    notAllowed: '不可用',
    isTrue: '是',
    isFalse: '否',
    isCreate: '创建证书',
    isCreated: '证书创建成功',
    nameRequired: '请输入证书名称',
    enableRequired: '请选择是否可用',
    certTips: '证书可以绑定给设备，同时需将相应设备的认证方式设置为证书认证。',
    key: '私有密钥',
    root: 'actorcloud的根CA',
    deviceCert: '设备证书',
    download: '下载',
    downloadCert: '下载证书',
    bindDevices: '已绑定设备',
    addDevices: '绑定设备',
    deviceName: '设备名称',
    deviceID: '设备编号',
    productName: '所属产品',
    groupName: '所属分组',
    notNull: '所选设备不能为空',
  },
  map: {
    groupName: '所属分组',
  },
  deviceLogs: {
    deviceName: '设备名称',
    deviceID: '客户端ID',
    IP: '客户端IP',
    connectStatusLabel: '事件',
    createAt: '产生时间',
    instruct: '指令内容',
    payload: '载荷',
    publishStatusLabel: '指令状态',
    controlCreateAt: '下发时间',
    eventCreateAt: '产生时间',
    topic: '主题',
  },
  tags: {
    tag: '标签',
    tagNameRequired: '请输入标签名称搜索',
  },
  publish: {
    device: '下发设备',
    deviceRequired: '请选择下发设备',
    searchDevice: '请输入设备名称搜索',
    group: '下发分组',
    groupRequired: '请选择下发分组',
    commandType: '指令类型',
    customCommand: '自定义指令',
    upgradeCommand: '升级指令',
    package: '软件包',
    packageRequired: '请选择升级包',
    pathRequired: '请输入 PATH',
  },
  events: {
    topic: '主题',
    data: '数据内容',
    dataTypeLabel: '事件类型',
    responseResult: '请求结果',
    createAtLog: '发生时间',
  },
  charts: {
    customChart: '自定义图表',
    showDataPoints: '取消勾选某个功能点后，将不会再显示该功能点的图表数据。',
  },
}
