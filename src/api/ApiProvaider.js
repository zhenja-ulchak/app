import axios from 'axios';


const BASE_URL = `https://api.crosscore.app`;
export const GetUsers = async (username, password)=>{
    let retVal = null;
    try {

        const response = await axios.get(`${BASE_URL}/user`, {
            withCredentials: true,
       
        });
        
        retVal = response
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    
    return retVal;
}
export const GetUsers2 = ()=>{
    let retVal = null;
    const userRespons = {
        "status": 200,
        "asset_version": null,
        "gui-message": "message.ok",
        "message": {
            "message": "Request went well",
            "guiMessage": "message.ok"
        },
        "data": {
            "total": 15,
            "page_total": 15,
            "user": [
                {
                    "id": "10039",
                    "client_id": "103",
                    "username": "пікр",
                    "active": true,
                    "last_name": "еркер",
                    "first_name": "фуеруфкер",
                    "display_name": "username (еркер, фуеруфкер)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "1111",
                    "password": "b59c67bf196a4758191e42f76670ceba",
                    "auth_key": "4ad17923485311ef8c8cb62304048e10",
                    "auth_key_old": "eb38055e44d111ef8c8cb62304048e10",
                    "email": "super-zhenja123@ukr.net",
                    "mobile": "{\"info\": {\"reason\": \"input\", \"countryCode\": \"DE\", \"numberValue\": \"+4956796796\", \"nationalNumber\": \"56796796\", \"countryCallingCode\": \"49\"}, \"value\": \"+49 5679 6796\"}",
                    "contract_version": "100285459506149100",
                    "lang": "ua",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-07-18 08:49:45",
                    "lastchange_by": "tester",
                    "created": "2024-07-18 08:49:45",
                    "created_by": null,
                    "auth_key_next_time": "2024-07-18 08:49:29",
                    "telegram_username": null,
                    "user_role_id": "70",
                    "user_id": "10039",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10038",
                    "client_id": "103",
                    "username": "арлоарод",
                    "active": true,
                    "last_name": "адрад",
                    "first_name": "прдлпрлд",
                    "display_name": "username (адрад, прдлпрлд)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "698d51a19d8a121ce581499d7b701668",
                    "auth_key": "1d16b60848f911ef8c8cb62304048e10",
                    "auth_key_old": "1bef678e443811ef8c8cb62304048e10",
                    "email": "super-zhenj54656@ukr.net",
                    "mobile": "{\"info\": {\"reason\": \"input\", \"countryCode\": \"DE\", \"numberValue\": \"+49752732753\", \"nationalNumber\": \"752732753\", \"countryCallingCode\": \"49\"}, \"value\": \"+49 7527 32753\"}",
                    "contract_version": "100285459506149101",
                    "lang": "en",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": null,
                    "lastchange_by": "tester",
                    "created": null,
                    "created_by": null,
                    "auth_key_next_time": "2024-07-17 14:28:44",
                    "telegram_username": null,
                    "user_role_id": "70",
                    "user_id": "10038",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10037",
                    "client_id": "103",
                    "username": "wreg",
                    "active": true,
                    "last_name": "wg",
                    "first_name": "wg",
                    "display_name": "username (wg, wg)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "698d51a19d8a121ce581499d7b701668",
                    "auth_key": "7a9b4938443511ef8c8cb62304048e10",
                    "auth_key_old": "",
                    "email": "super-slon@ukr.net",
                    "mobile": null,
                    "contract_version": "100285459506149093",
                    "lang": "de",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": null,
                    "lastchange_by": "tester",
                    "created": null,
                    "created_by": null,
                    "auth_key_next_time": "2024-07-17 14:09:55",
                    "telegram_username": null,
                    "user_role_id": "69",
                    "user_id": "10037",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10036",
                    "client_id": "103",
                    "username": "zhenjazhenja",
                    "active": true,
                    "last_name": "Жмышенкоrrr",
                    "first_name": "zhenja",
                    "display_name": "username (Жмышенкоrrr, zhenja)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "b59c67bf196a4758191e42f76670ceba",
                    "auth_key": "72d2f6f8443411ef8c8cb62304048e10",
                    "auth_key_old": "786e8f61442f11ef8c8cb62304048e10",
                    "email": "super-zhenja@ukr.net",
                    "mobile": "{\"info\": {\"reason\": \"input\", \"countryCode\": \"DE\", \"numberValue\": \"+4972752727\", \"nationalNumber\": \"72752727\", \"countryCallingCode\": \"49\"}, \"value\": \"+49 7275 2727\"}",
                    "contract_version": "100285459506149092",
                    "lang": "en",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-07-17 14:02:32",
                    "lastchange_by": "tester",
                    "created": "2024-07-17 14:02:32",
                    "created_by": null,
                    "auth_key_next_time": "2024-07-17 13:26:54",
                    "telegram_username": null,
                    "user_role_id": "70",
                    "user_id": "10036",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10035",
                    "client_id": "103",
                    "username": "",
                    "active": true,
                    "last_name": "",
                    "first_name": "",
                    "display_name": "username (, )",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "d41d8cd98f00b204e9800998ecf8427e",
                    "auth_key": "bcb6e1a2435211ef8c8cb62304048e10",
                    "auth_key_old": "",
                    "email": null,
                    "mobile": null,
                    "contract_version": "100285459506149089",
                    "lang": "",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": null,
                    "lastchange_by": "tester",
                    "created": null,
                    "created_by": null,
                    "auth_key_next_time": "2024-07-16 11:06:50",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "10035",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10024",
                    "client_id": "103",
                    "username": "asd",
                    "active": true,
                    "last_name": "asda",
                    "first_name": "asd",
                    "display_name": "username (asda, asd)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "7815696ecbf1c96e6894b779456d330e",
                    "auth_key": "9a38546c150f11ef8c8cb62304048e10",
                    "auth_key_old": "a48adb0cf9c811ee8c8cb62304048e10",
                    "email": null,
                    "mobile": null,
                    "contract_version": "100285459506136806",
                    "lang": "en",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-05-18 14:10:22",
                    "lastchange_by": "tester",
                    "created": "2024-05-18 14:10:22",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "10024",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10018",
                    "client_id": "103",
                    "username": "asda",
                    "active": true,
                    "last_name": "asda",
                    "first_name": "asdasa",
                    "display_name": "username (asda, asdasa)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "7815696ecbf1c96e6894b779456d330e",
                    "auth_key": "9bcb2755dfae11ee8c8cb62304048e10",
                    "auth_key_old": "",
                    "email": null,
                    "mobile": null,
                    "contract_version": "100285459506136134",
                    "lang": "en",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": null,
                    "lastchange_by": "tester",
                    "created": null,
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "10018",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10015",
                    "client_id": "103",
                    "username": "sdasdasd",
                    "active": true,
                    "last_name": "asda",
                    "first_name": "asdasd",
                    "display_name": "username (asda, asdasd)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "a8f5f167f44f4964e6c998dee827110c",
                    "auth_key": "5e4a2abf2f7511ef8c8cb62304048e10",
                    "auth_key_old": "88a0e8abdfa511ee8c8cb62304048e10",
                    "email": "example@gmail.com",
                    "mobile": "{\"info\": {\"reason\": \"input\", \"countryCode\": \"AM\", \"numberValue\": \"+3748289456\", \"nationalNumber\": \"8289456\", \"countryCallingCode\": \"374\"}, \"value\": \"+374 82 89456\"}",
                    "contract_version": "100285459506147251",
                    "lang": "en",
                    "gui_config": null,
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-06-21 04:24:21",
                    "lastchange_by": "superadmin",
                    "created": "2024-06-21 04:24:21",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": "65",
                    "user_id": "10015",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "10004",
                    "client_id": "103",
                    "username": "astrid.lingred1",
                    "active": true,
                    "last_name": "Lindgren1",
                    "first_name": "Astrid1",
                    "display_name": "username (Lindgren1, Astrid1)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "",
                    "password": "81dc9bdb52d04dc20036dbd8313ed055",
                    "auth_key": "cd7482d1b91911ee8c8cb62304048e10",
                    "auth_key_old": "df08612db7ce11ee8c8cb62304048e10",
                    "email": "astrid.lingred@mail.com",
                    "mobile": null,
                    "contract_version": "100285459506135677",
                    "lang": "de",
                    "gui_config": "{\"mode\": \"light\", \"theme\": \"green\", \"radius\": 0.75}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-01-22 12:31:36",
                    "lastchange_by": "tester",
                    "created": "2024-01-22 12:31:36",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "10004",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "1125",
                    "client_id": "103",
                    "username": "myuser1",
                    "active": true,
                    "last_name": "LASTN1",
                    "first_name": "Firstname1",
                    "display_name": "username (LASTN1, Firstname1)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "3",
                    "password_klar": "1234",
                    "password": "81dc9bdb52d04dc20036dbd8313ed055",
                    "auth_key": "6735cba1d1bf11ee8c8cb62304048e10",
                    "auth_key_old": "74dabb98b2de11ee8c8cb62304048e10",
                    "email": "",
                    "mobile": null,
                    "contract_version": "100285459506136089",
                    "lang": "de",
                    "gui_config": "{\"css_config\": [], \"teamplate_name\": \"default\"}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-02-22 21:17:29",
                    "lastchange_by": "tester",
                    "created": "2024-02-22 21:17:29",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "1125",
                    "user_group_accesslevel": "10",
                    "user_group_name": "user",
                    "user_group_display_name": "User",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "1121",
                    "client_id": "103",
                    "username": "demo-testa5",
                    "active": true,
                    "last_name": "demo-testa5",
                    "first_name": "User",
                    "display_name": "username (demo-testa5, User)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "2",
                    "password_klar": "",
                    "password": "6e9bece1914809fb8493146417e722f6",
                    "auth_key": "745285f6b2de11ee8c8cb62304048e10",
                    "auth_key_old": "50f25a09b05b11ee8c8cb62304048e10",
                    "email": "aaa",
                    "mobile": null,
                    "contract_version": "100285459506135505",
                    "lang": "de",
                    "gui_config": "{\"css_config\": [], \"teamplate_name\": \"default\"}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-01-14 14:11:39",
                    "lastchange_by": "superadmin",
                    "created": "2024-01-14 14:11:39",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "1121",
                    "user_group_accesslevel": "100",
                    "user_group_name": "admin",
                    "user_group_display_name": "Administrator",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "108",
                    "client_id": "103",
                    "username": "tester",
                    "active": true,
                    "last_name": "tester",
                    "first_name": "Adam",
                    "display_name": "username (tester, Adam)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "2",
                    "password_klar": "1234",
                    "password": "81dc9bdb52d04dc20036dbd8313ed055",
                    "auth_key": "2cfba2f23d4011ef8c8cb62304048e10",
                    "auth_key_old": "05d9de2e330911ef8c8cb62304048e10",
                    "email": "viktor.nikolayev@gmail.com",
                    "mobile": null,
                    "contract_version": "100285459506148749",
                    "lang": "ua",
                    "gui_config": "{\"grey\": {\"50\": \"#fafafa\", \"100\": \"#f5f5f5\", \"200\": \"#eeeeee\", \"300\": \"#e0e0e0\", \"400\": \"#bdbdbd\", \"500\": \"#9e9e9e\", \"600\": \"#757575\", \"700\": \"#616161\", \"800\": \"#424242\", \"900\": \"#212121\", \"A100\": \"#f5f5f5\", \"A200\": \"#eeeeee\", \"A400\": \"#bdbdbd\", \"A700\": \"#616161\"}, \"info\": {\"dark\": \"#01579b\", \"main\": \"#0288d1\", \"light\": \"#03a9f4\", \"contrastText\": \"#fff\"}, \"mode\": \"light\", \"text\": {\"primary\": \"rgba(0, 0, 0, 0.87)\", \"disabled\": \"rgba(0, 0, 0, 0.38)\", \"secondary\": \"rgba(0, 0, 0, 0.6)\"}, \"error\": {\"dark\": \"#c62828\", \"main\": \"#d32f2f\", \"light\": \"#ef5350\", \"contrastText\": \"#fff\"}, \"action\": {\"focus\": \"rgba(0, 0, 0, 0.12)\", \"hover\": \"rgba(0, 0, 0, 0.04)\", \"active\": \"rgba(0, 0, 0, 0.54)\", \"disabled\": \"rgba(0, 0, 0, 0.26)\", \"selected\": \"rgba(0, 0, 0, 0.08)\", \"focusOpacity\": 0.12, \"hoverOpacity\": 0.04, \"disabledOpacity\": 0.38, \"selectedOpacity\": 0.08, \"activatedOpacity\": 0.12, \"disabledBackground\": \"rgba(0, 0, 0, 0.12)\"}, \"common\": {\"black\": \"#000\", \"white\": \"#fff\"}, \"divider\": \"rgba(0, 0, 0, 0.12)\", \"primary\": {\"dark\": \"#1565c0\", \"main\": \"#1976d2\", \"light\": \"#42a5f5\", \"contrastText\": \"#fff\"}, \"success\": {\"dark\": \"#1b5e20\", \"main\": \"#2e7d32\", \"light\": \"#4caf50\", \"contrastText\": \"#fff\"}, \"warning\": {\"dark\": \"#e65100\", \"main\": \"#ed6c02\", \"light\": \"#ff9800\", \"contrastText\": \"#fff\"}, \"secondary\": {\"dark\": \"#7b1fa2\", \"main\": \"#9c27b0\", \"light\": \"#ba68c8\", \"contrastText\": \"#fff\"}, \"background\": {\"paper\": \"#fff\", \"default\": \"#fff\"}, \"tonalOffset\": 0.2, \"contrastThreshold\": 3}",
                    "fa2_type": "telegram",
                    "fa2_confirmed": false,
                    "deleted": "2024-01-02 20:56:22",
                    "lastchange": "2024-07-08 17:38:51",
                    "lastchange_by": "tester",
                    "created": "2024-07-08 17:38:51",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": "-1002114258881::450",
                    "user_role_id": null,
                    "user_id": "108",
                    "user_group_accesslevel": "100",
                    "user_group_name": "admin",
                    "user_group_display_name": "Administrator",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "99",
                    "client_id": "103",
                    "username": "d.admin",
                    "active": true,
                    "last_name": "d.admin",
                    "first_name": "Adminuser",
                    "display_name": "username (d.admin, Adminuser)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "2",
                    "password_klar": "",
                    "password": "6e9bece1914809fb8493146417e722f6",
                    "auth_key": "eae78217b91211ee8c8cb62304048e10",
                    "auth_key_old": "e8785d7cb91211ee8c8cb62304048e10",
                    "email": "",
                    "mobile": null,
                    "contract_version": "100285459506135673",
                    "lang": "en",
                    "gui_config": "{\"css_config\": [], \"teamplate_name\": \"default\"}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-01-22 11:42:19",
                    "lastchange_by": "tester",
                    "created": "2024-01-22 11:42:19",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "99",
                    "user_group_accesslevel": "100",
                    "user_group_name": "admin",
                    "user_group_display_name": "Administrator",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "88",
                    "client_id": "103",
                    "username": "dev.user",
                    "active": false,
                    "last_name": "Dev",
                    "first_name": "User",
                    "display_name": "username (Dev, User)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "2",
                    "password_klar": "asdasdasd",
                    "password": "a3dcb4d229de6fde0db5686dee47145d",
                    "auth_key": "3513daa8031511ef8c8cb62304048e10",
                    "auth_key_old": "2856a352031511ef8c8cb62304048e10",
                    "email": "asd@asd.asda",
                    "mobile": null,
                    "contract_version": "100285459506136319",
                    "lang": "en",
                    "gui_config": "{\"css_config\": [], \"teamplate_name\": \"default\"}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-04-25 17:05:09",
                    "lastchange_by": "superadmin",
                    "created": "2024-04-25 17:05:09",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "88",
                    "user_group_accesslevel": "100",
                    "user_group_name": "admin",
                    "user_group_display_name": "Administrator",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                },
                {
                    "id": "87",
                    "client_id": "103",
                    "username": "demo-testa",
                    "active": true,
                    "last_name": "demo-testa",
                    "first_name": "User",
                    "display_name": "username (demo-testa, User)",
                    "type": "frontend",
                    "is_customer": "0",
                    "user_group_id": "2",
                    "password_klar": "",
                    "password": "a8f5f167f44f4964e6c998dee827110c",
                    "auth_key": "ea8793fcb91211ee8c8cb62304048e10",
                    "auth_key_old": "e7f19673b91211ee8c8cb62304048e10",
                    "email": "",
                    "mobile": null,
                    "contract_version": "100285459506135672",
                    "lang": "uk",
                    "gui_config": "{\"css_config\": [], \"teamplate_name\": \"default\"}",
                    "fa2_type": null,
                    "fa2_confirmed": false,
                    "deleted": null,
                    "lastchange": "2024-01-22 11:42:19",
                    "lastchange_by": "tester",
                    "created": "2024-01-22 11:42:19",
                    "created_by": null,
                    "auth_key_next_time": "2024-04-25 01:42:17",
                    "telegram_username": null,
                    "user_role_id": null,
                    "user_id": "87",
                    "user_group_accesslevel": "100",
                    "user_group_name": "admin",
                    "user_group_display_name": "Administrator",
                    "client_name": "indyn",
                    "client_display_name": "INDYN"
                }
            ]
        }
    }
    retVal = userRespons;
    return retVal;
}
//GetLogin("INDYN\\tester","1234")
export const GetLogin = async (username, password) => {
    try {
 
      const authString = `Basic ${btoa(`${username}:${password}`)}`;
      
  
      const response = await axios.get(`${BASE_URL}/user/login`, {
        headers: {
          Authorization: authString,
        },
        withCredentials: true 
      });
  
  
   
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    
  };
  export const GetLoginRefresh = async (username, password) => {
      console.log(username);
      
    try {
 
      const authString = `Basic ${btoa(`${username}:${password}`)}`;
      
  
      const response = await axios.get(`${BASE_URL}/user/login-refresh`, {
        headers: {
          Authorization: authString,
        },
        withCredentials: true 
      });
  
      console.log(response);
      
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
    
  };


export const Logout = ()=>{
    console.log("Logout out");
    
}


export const GetTarif = async (username, password) => {
    try {
  
      const response = await axios.get(`${BASE_URL}/user/tariff`, {

        withCredentials: true 
      });
  
   
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

export const getHealth = async () => {
    try {
      const response = await axios.get(BASE_URL + "/tools/health");
   
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };