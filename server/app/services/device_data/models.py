from sqlalchemy import func
from sqlalchemy.dialects.postgresql import JSONB

from actor_libs.database.orm import ModelMixin, db


__all__ = [
    'DeviceEvent', 'ConnectLog',
    'DataPointEventHour', 'DataPointEventDay', 'DataPointEventMonth',
    'Lwm2mEventHour', 'Lwm2mEventDay', 'Lwm2mEventMonth'
]


class DeviceEvent(ModelMixin, db.Model):
    """ device upload event """
    __tablename__ = 'device_events'
    __table_args__ = (
        db.Index('device_events_msgTime_idx', "msgTime"),
    )
    msgTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String(9), primary_key=True)
    productID = db.Column(db.String(6))
    deviceID = db.Column(db.String(100), primary_key=True)
    topic = db.Column(db.String(500))
    streamID = db.Column(db.String)
    dataType = db.Column(db.SmallInteger)  # 1:event  2:response
    responseResult = db.Column(JSONB)
    data = db.Column(JSONB)


class ConnectLog(ModelMixin, db.Model):
    """ client connect log """
    __tablename__ = 'connect_logs'
    __table_args__ = (
        db.Index('connect_logs_msgTime_idx', "msgTime"),
    )
    keepAlive = db.Column(db.Integer)
    IP = db.Column(db.String(50))
    connectStatus = db.Column(db.SmallInteger)  # 0:Offline, 1:Online, 2:AuthenticateFailed
    msgTime = db.Column(db.DateTime, server_default=func.now(), primary_key=True)
    deviceID = db.Column(db.String(100), primary_key=True)  # device uid
    tenantID = db.Column(db.String, primary_key=True)  # tenant uid


class BaseAggr(ModelMixin, db.Model):
    __abstract__ = True
    minValue = db.Column(db.Float)
    maxValue = db.Column(db.Float)
    avgValue = db.Column(db.Float)
    sumValue = db.Column(db.Float)
    minCalc = db.Column(db.Float)
    maxCalc = db.Column(db.Float)
    avgCalc = db.Column(db.Float)
    sumCalc = db.Column(db.Float)


class DataPointEventHour(BaseAggr):
    __tablename__ = 'data_point_event_hour'
    __table_args__ = (
        db.Index('data_point_event_hour_countTime_idx', "countTime"),
    )
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"), primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    topic = db.Column(db.String(500), primary_key=True)
    dataPointID = db.Column(db.String(200), primary_key=True)


class DataPointEventDay(BaseAggr):
    __tablename__ = 'data_point_event_day'
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"),
                         primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    topic = db.Column(db.String(500), primary_key=True)
    dataPointID = db.Column(db.String(200), primary_key=True)


class DataPointEventMonth(BaseAggr):
    __tablename__ = 'data_point_event_month'
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"),
                         primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    topic = db.Column(db.String(500), primary_key=True)
    dataPointID = db.Column(db.String(200), primary_key=True)


class Lwm2mEventHour(BaseAggr):
    __tablename__ = 'lwm2m_event_hour'
    __table_args__ = (
        db.Index('lwm2m_event_hour_countTime_idx', "countTime"),
    )
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"),
                         primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    path = db.Column(db.String(50), primary_key=True)  # /object_id/instance_id/item_id
    objectItem = db.Column(db.String(50))  # /object_id/item_id


class Lwm2mEventDay(BaseAggr):
    __tablename__ = 'lwm2m_event_day'
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"),
                         primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    path = db.Column(db.String(50), primary_key=True)  # /object_id/instance_id/item_id
    objectItem = db.Column(db.String(50))  # /object_id/item_id


class Lwm2mEventMonth(BaseAggr):
    __tablename__ = 'lwm2m_event_month'
    countTime = db.Column(db.DateTime, primary_key=True)
    tenantID = db.Column(db.String,
                         db.ForeignKey('tenants.tenantID',
                                       onupdate="CASCADE",
                                       ondelete="CASCADE"),
                         primary_key=True)
    productID = db.Column(db.String,
                          db.ForeignKey('products.productID',
                                        onupdate="CASCADE",
                                        ondelete="CASCADE"))
    deviceID = db.Column(db.String(100), primary_key=True)
    path = db.Column(db.String(50), primary_key=True)  # /object_id/instance_id/item_id
    objectItem = db.Column(db.String(50))  # /object_id/item_id
