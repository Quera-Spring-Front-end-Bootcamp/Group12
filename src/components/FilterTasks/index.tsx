import { Badge, Divider } from "@mantine/core"
import SearchInput from "../Search"
import Button from "../Button"
import SvgProvier from "../../assets/icons/SvgProvider"
import { TwoLineSetting } from "../../assets/icons"


const FilterTask = () => {
  return (
    <div className="flex  gap-4 items-center border-b-2 pb-1">
          <SearchInput fw={500} fz={12} placeholder="جستجو بین تسک‌ها" className="border-none" />
          <Divider orientation="vertical" />
          <Button
            fw={500}
            fz={12}
            leftIcon={
              <SvgProvier color="#323232" style={{ height: '24px' }}>
                <TwoLineSetting />
              </SvgProvier>
            }
            ml={30}
            style={{
              backgroundColor: 'transparent',
              color: 'inherit'
            }}
          >
            فیلترها
          </Button>
          <Badge size="lg" color="cyan">
            دسته‌بندی‌شده با: وضعیت
          </Badge>
        </div>
  )
}

export default FilterTask