CREATE TABLE sesInfoArr (sessionId VARCHAR(50), channelId VARCHAR(50), companyId VARCHAR(20),
ekbId VARCHAR(20));

CREATE TABLE callBotsArr (sessionId VARCHAR(50), channelId VARCHAR(50), companyId VARCHAR(20),
botName VARCHAR(50), time BIGINT, numderBot INT);

INSERT INTO sesInfoArr (sessionId, channelId, companyId, ekbId)
VALUES
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', '111111'),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', '222222'),
('f4465250-1066-11eb-a1ba-333704aff6af', '543ea1f0-81d8-11e8-99e2-75a22f922020', 'i14778026796', '333333');

INSERT INTO callBotsArr (sessionId, channelId, companyId, botName, time, numderBot)
VALUES
('f4465250-1066-11eb-a1ba-333704aff6af', '543ea1f0-81d8-11e8-99e2-75a22f922020', 'i14778026796', 'moneybox', 1602677158, 1),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'changecrlim', 1602933008, 2),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'changecrlim', 1602930478, 3),
('74e40bf0-0fbd-11eb-8dcc-39ce21e9ded5', 'd79ad580-8432-11e8-8ccb-47a5457db1b2', 'i14778026796', 'partpaym', 1602929458, 4),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', 'mainformcurr', 1602835558, 5),
('eeae0530-1067-11eb-a1ba-333704aff6af', '70fff320-42d9-11ea-ac8e-33aee523fe76', 'i14778026796', 'formcurr', 1602835258, 6);

SELECT *
FROM callBotsArr
WHERE numderBot > 3
ORDER BY numderBot ASC;