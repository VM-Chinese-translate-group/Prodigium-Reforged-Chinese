import json
import os
import glob

# 获取所有JSON文件
json_files = glob.glob('D://mc//mod//Prodigium-Reforged-Chinese//CNPack//config//thitemstages//restrictions/*.json')

# 语言文件路径
lang_file_path = 'D://mc//mod//Prodigium-Reforged-Chinese//CNPack//config//thitemstages//en_us.json'
lang_data = {}

# 如果语言文件存在，读取现有数据
if os.path.exists(lang_file_path):
    with open(lang_file_path, 'r', encoding='utf-8') as file:
        try:
            lang_data = json.load(file)
        except json.JSONDecodeError:
            lang_data = {}

# 处理每个JSON文件
for json_file_path in json_files:
    file_name = os.path.splitext(os.path.basename(json_file_path))[0]
    with open(json_file_path, 'r', encoding='utf-8') as file:
        original_content = file.read()
        data = json.loads(original_content)

    # 替换itemTitle的值
    if 'itemTitle' in data['Settings']:
        original_title = data['Settings']['itemTitle']
        new_key = f'thitemstages.{file_name}.unavailable.name'
        data['Settings']['itemTitle'] = new_key

        # 保存修改后的JSON文件，保持原格式
        with open(json_file_path, 'w', encoding='utf-8') as file:
            file.write(json.dumps(data, ensure_ascii=False, indent=4))

        # 添加新的翻译键值对
        lang_data[new_key] = original_title

# 保存语言文件
with open(lang_file_path, 'w', encoding='utf-8') as file:
    json.dump(lang_data, file, ensure_ascii=False, indent=4)

print("所有JSON文件和语言文件已更新。")