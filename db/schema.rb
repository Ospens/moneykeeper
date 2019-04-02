# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_08_27_051027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "balance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "costs_categories", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "balance"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "operations", force: :cascade do |t|
    t.bigint "account_id"
    t.bigint "costs_category_id"
    t.text "description"
    t.integer "sum"
    t.integer "operation_type"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["account_id"], name: "index_operations_on_account_id"
    t.index ["costs_category_id"], name: "index_operations_on_costs_category_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "operations", "accounts"
  add_foreign_key "operations", "costs_categories"
end
