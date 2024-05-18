create database DB
use DB
create table qrup(
id int identity(1,1) primary key,
ad nvarchar(20),
soyAd nvarchar(20),
ataAd nvarchar(20),
finKod char(7) not null unique,
telefon char(20),
aliTehsil bit,
-- var 1, yoxdursa 0
dogumTarix date
)

select * from qrup

insert into qrup values (
N'Nazim',
N'Abdullayev',
N'Cəlil',
'....',
'+994552233599',
1,
'1975-01-15',
49,
10
),(
N'Cəlil',
N'Abdullayev',
N'Nazim',
'...',
'+994552727515',
1,
'2000-06-17',
23,
1
)


alter table qrup
Add yash tinyint

alter table qrup
Add staj tinyint

truncate table qrup

select * from qrup where yash>21 and staj>2

select yash from qrup where ad like 'N%'