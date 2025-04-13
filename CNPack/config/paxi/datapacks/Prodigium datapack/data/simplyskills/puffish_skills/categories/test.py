import os
import json
from collections import defaultdict

class TranslationManager:
    def __init__(self):
        self.translations = {}
        self.key_counts = defaultdict(int)
    
    def add_translation(self, key, text):
        # 如果这个键已经存在但文本不同，添加数字后缀
        if key in self.translations:
            if self.translations[key] != text:
                self.key_counts[key] += 1
                new_key = f"{key}_{self.key_counts[key]}"
                self.translations[new_key] = text
                return new_key
        else:
            self.translations[key] = text
        return key

def process_json_file(file_path, translation_manager):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            modified = False
            
            # 遍历所有技能
            for skill_name, skill_data in data.items():
                if isinstance(skill_data, dict):
                    # 处理 title
                    if 'title' in skill_data:
                        # 只处理字符串形式的 title，跳过已有翻译键的
                        if isinstance(skill_data['title'], str):
                            original_text = skill_data['title']
                            base_key = f"text.skills.{skill_name}.title"
                            trans_key = translation_manager.add_translation(base_key, original_text)
                            skill_data['title'] = {"translate": trans_key}
                            modified = True
                            print(f"替换 title: {skill_name}")
                    
                    # 处理 description
                    if 'description' in skill_data:
                        # 只处理字符串形式的 description，跳过已有翻译键的
                        if isinstance(skill_data['description'], str):
                            original_text = skill_data['description']
                            base_key = f"text.skills.{skill_name}.description"
                            trans_key = translation_manager.add_translation(base_key, original_text)
                            skill_data['description'] = {"translate": trans_key}
                            modified = True
                            print(f"替换 description: {skill_name}")
            
            # 如果有修改，写回文件
            if modified:
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(data, f, indent=2, ensure_ascii=False)
                print(f"已更新文件: {file_path}")
                
    except json.JSONDecodeError as e:
        print(f"解析 JSON 文件失败: {file_path}")
        print(f"错误: {str(e)}")

def process_directory(directory):
    translation_manager = TranslationManager()
    
    # 遍历目录中的所有文件
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.json') and file != 'category.json':
                file_path = os.path.join(root, file)
                print(f"处理文件: {file_path}")
                process_json_file(file_path, translation_manager)
    
    # 生成语言文件
    generate_language_file(directory, translation_manager.translations)

def generate_language_file(directory, translations):
    # 创建语言文件目录
    lang_dir = os.path.join(directory, "lang")
    os.makedirs(lang_dir, exist_ok=True)
    
    # 生成英文语言文件
    en_us_path = os.path.join(lang_dir, "en_us.json")
    
    # 如果文件存在，先读取现有内容
    existing_translations = {}
    if os.path.exists(en_us_path):
        with open(en_us_path, 'r', encoding='utf-8') as f:
            try:
                existing_translations = json.load(f)
            except json.JSONDecodeError:
                pass
    
    # 合并现有翻译和新翻译
    existing_translations.update(translations)
    
    # 写入英文语言文件
    with open(en_us_path, 'w', encoding='utf-8') as f:
        json.dump(existing_translations, f, indent=2, ensure_ascii=False)
    print(f"已生成语言文件: {en_us_path}")

def clean_directory(directory_path):
    """清理目录，只保留指定文件"""
    # 要保留的文件列表
    files_to_keep = ['category.json', 'definitions.json', 'test.py']
    
    try:
        # 递归遍历目录中的所有文件和子目录
        for root, dirs, files in os.walk(directory_path, topdown=False):
            # 先处理文件
            for filename in files:
                file_path = os.path.join(root, filename)
                
                # 获取相对于当前目录的文件名
                current_script = os.path.basename(__file__)
                
                # 如果文件不在保留列表中且不是当前脚本，则删除
                if filename not in files_to_keep and filename != current_script:
                    try:
                        os.remove(file_path)
                        print(f"已删除文件: {file_path}")
                    except Exception as e:
                        print(f"删除文件 {file_path} 时出错: {str(e)}")
            
            # 处理空目录（如果目录为空则删除）
            for dir_name in dirs:
                dir_path = os.path.join(root, dir_name)
                try:
                    if not os.listdir(dir_path):  # 如果目录为空
                        os.rmdir(dir_path)
                        print(f"已删除空目录: {dir_path}")
                except Exception as e:
                    print(f"删除目录 {dir_path} 时出错: {str(e)}")
                    
    except Exception as e:
        print(f"处理目录时出错: {str(e)}")

if __name__ == "__main__":
    # 获取当前脚本所在的目录
    current_directory = os.path.dirname(os.path.abspath(__file__))
    
    # 先清理目录
    print(f"开始清理目录: {current_directory}")
    clean_directory(current_directory)
    print("清理完成!")
    
    # 继续原有的处理流程
    print(f"开始处理翻译: {current_directory}")
    process_directory(current_directory)
    print("处理完成!")