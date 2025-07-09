import os
import shutil
from datetime import datetime
import tkinter as tk
from tkinter import filedialog, messagebox

allowed_ext = ['.pdf', '.docx', '.doc', '.xlsx', '.pptx']


def organize_files_by_year(source_dir, output_dir):
    for root, _, files in os.walk(source_dir):
        for file in files:
            file_path = os.path.join(root, file)

            ext = os.path.splitext(file)[1].lower()
            if ext not in allowed_ext:
                continue  # Bỏ qua file không hợp lệ

            try:
                # Lấy thời gian sửa đổi cuối cùng
                modified_time = os.path.getmtime(file_path)
                year = datetime.fromtimestamp(modified_time).year

                # Tạo thư mục theo năm
                year_folder = os.path.join(output_dir, str(year))
                os.makedirs(year_folder, exist_ok=True)

                # Tên đích (nếu trùng thì thêm số đuôi để tránh ghi đè)
                dest_file = os.path.join(year_folder, file)
                counter = 1
                while os.path.exists(dest_file):
                    name, ext = os.path.splitext(file)
                    dest_file = os.path.join(year_folder, f"{name}_{counter}{ext}")
                    counter += 1

                # Sao chép file vào thư mục năm
                shutil.move(file_path, dest_file)
                print(f"Đã sao chép: {file_path} → {dest_file}")

            except Exception as e:
                print(f"Lỗi xử lý file {file_path}: {e}")


def main():
    # Khởi tạo cửa sổ ẩn để dùng dialog
    root = tk.Tk()
    root.withdraw()

    # Hộp thoại chọn thư mục nguồn
    source_dir = filedialog.askdirectory(title="Chọn thư mục nguồn chứa tài liệu")
    if not source_dir:
        messagebox.showwarning("Thông báo", "Chưa chọn thư mục nguồn.")
        return

    # Hộp thoại chọn thư mục đích
    output_dir = filedialog.askdirectory(title="Chọn thư mục để lưu theo năm")
    if not output_dir:
        messagebox.showwarning("Thông báo", "Chưa chọn thư mục đích.")
        return

    # Thực hiện sắp xếp
    organize_files_by_year(source_dir, output_dir)
    messagebox.showinfo("Hoàn tất", "Đã sắp xếp xong các file theo năm sửa đổi.")

if __name__ == "__main__":
    main()
