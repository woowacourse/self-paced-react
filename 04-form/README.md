# 04. 폼 UI 구현하기: controlled vs uncontrolled

## 🎯 요구 사항
- `Header`의 레스토랑 추가 버튼을 클릭하면 레스토랑 추가 폼이 모달로 뜨도록 구현해 주세요
  - 이전 단계에서 만들어두었던 `AddRestaurantModal`을 그대로 사용합니다. 
- 카테고리를 선택하고, `<input/>`, `<textarea/>`에 값을 입력한 뒤 '추가하기' 버튼을 클릭하면 레스토랑 목록에 추가되도록 구현해 주세요. 
  - 유효성 검사는 하지 않습니다. 아주 간단하게 입력값을 처리해보는 구현만 해도 충분합니다.
  - id는 `Date.now()`값을 임의로 할당합니다. 
- (optional) 재사용할 수 있는 Modal 컴포넌트를 만들어서 `AddRestaurantModal`, `RestaurantDetailModal`을 Modal 컴포넌트를 활용해 구현하는 것으로 개선해 보세요

## ✅ 키워드
- controlled vs uncontrolled
- children props

> 재사용할 수 있는 모달을 만들 때 `children`을 활용해 보세요. 아래와 같은 식으로 UI를 구성할 수 있습니다.      

```javascript
// 설명을 위한 예시용 마크업입니다. 실제로 사용하는 마크업은 template/ 하위의 html을 참고하거나 직접 원하는대로 구현하여 사용해 주세요.
// 반드시 아래와 같은 형식으로 쓸 필요는 없습니다. 원하는 방식대로 재사용 가능한 <Modal/> 컴포넌트를 만들어 보세요.

// AddRestaurantModal.jsx 
<Modal title="새로운 음식점" onClose={onClose}>
  <form></form>
</Modal>

// RestaurantDetailModal.jsx 
<Modal title={restaurant.name} onClose={onClose}>
  <div className="restaurant-info"></div>
  <div className="button-container"></div>
</Modal>
```

## 🧙‍♀️ 진행 가이드
- 권장 진행 시간: (optional 제외) 2시간 내
- 권장 시간 이후에는 요구 사항 별로 아래 브랜치를 참고해 보세요 
  - [guide/04-1](https://github.com/woowacourse/self-paced-react/commit/c7fd896e684b488f46e0ee0fdaf8cb636943a995) 
  - [guide/04-2](https://github.com/woowacourse/self-paced-react/commit/7c998b3d10f77b8a219e586ffd68ff90d7a9977a)
  - [guide/04-3](https://github.com/woowacourse/self-paced-react/commit/17ad782fbb4f0378dcb7ad196f335751b48a20ec)

## 🔗 참고 문서
- [Sharing State Between Components](https://react.dev/learn/sharing-state-between-components)
- [API Reference: <input>](https://react.dev/reference/react-dom/components/input)
